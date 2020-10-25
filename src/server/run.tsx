import fastify from "fastify";
import path from "path";
import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { renderToString } from "react-dom/server";
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
        // get webpack generated asset-manifest
        let assetManifest = require(path.resolve(
            process.cwd() + "/build/asset-manifest.json"
        ));

        let context: StaticRouterContext = {};
        const reactAppStream = renderToString(
            <StaticRouter location={request.url} context={context}>
                <Document assetManifest={assetManifest} />
            </StaticRouter>
        );

        if (context.url) {
            // Somewhere a `<Redirect>` was rendered
            reply.redirect(context.url);
        } else {
            reply
                .code(context.statusCode || 200)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(reactAppStream);
        }
    });

    server.listen(8080, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
})();
