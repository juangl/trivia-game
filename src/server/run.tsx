import fastify from "fastify";
import path from "path";
import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { renderToNodeStream } from "react-dom/server";
import devMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import fastifyExpress from "fastify-express";
import webpackConfig from "../../tools/webpack.config";
import { Document } from "../components/Document";

const compiler = webpack(webpackConfig as webpack.Configuration);
const { publicPath } = webpackConfig.output;

const server = fastify();

(async () => {
    await server.register(fastifyExpress);
    await (server as any).use(devMiddleware(compiler, { publicPath }));

    server.get("/*", async (request, reply) => {
        reply.type("text/html");

        // get webpack generated asset-manifest
        let assetManifest = require(path.resolve(
            process.cwd() + "/build/asset-manifest.json"
        ));

        let context: StaticRouterContext = {};

        const reactAppStream = renderToNodeStream(
            <StaticRouter location={request.url} context={context}>
                <Document assetManifest={assetManifest} />
            </StaticRouter>
        );

        reply.type("text/html");
        reactAppStream.on("data", (data) => {
            reply.raw.write(data);
        });
        reactAppStream.on("end", (data) => {
            reply.code(404);
            reply.raw.end();
        });
    });

    server.listen(8080, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
})();
