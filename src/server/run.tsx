import fastify from "fastify";
import path from "path";
import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { renderToString } from "react-dom/server";
import devMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import fastifyExpress from "fastify-express";
import webpackConfig from "../../tools/webpack.config";

function resetModuleCache() {
    if (process.env.NODE_ENV === "development") {
        for (let key in require.cache) {
            if (!key.match(/\/node_modules\//)) {
                delete require.cache[key];
            }
        }
    }
}
const server = fastify();

(async () => {
    // webpack dev middleware
    let compiler = webpack(webpackConfig as webpack.Configuration);
    let { publicPath } = webpackConfig.output;
    await server.register(fastifyExpress);
    await (server as any).use(devMiddleware(compiler, { publicPath }));

    server.get("/*", async (request, reply) => {
        // get webpack generated asset-manifest
        let assetManifest = require(path.resolve(
            process.cwd() + "/build/asset-manifest.json"
        ));

        // reset the module cache on each request so that I SSR the latest
        // code. This way we don't need nodemon which would make webpack to
        // compile everything on every restart
        resetModuleCache();

        let { Document } = require("../components/Document");

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

    server.setErrorHandler(function (error, request, reply) {
        console.error(error);
        reply.code(500).send("something went wrong :(");
      })

    server.listen(8080, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
})();
