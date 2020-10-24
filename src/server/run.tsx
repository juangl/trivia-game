import fastify from "fastify";
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
        let assetManifest = require(process.cwd() +
            "/build/asset-manifest.json");
        reply.send(
            renderToNodeStream(<Document assetManifest={assetManifest} />)
        );
    });

    server.listen(8080, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
})();
