import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { renderToString } from "react-dom/server";
import { NotFound } from "./NotFound";

describe("<NotFound />", () => {
    it("should render the component with the proper status code", () => {
        let context: StaticRouterContext = {};
        renderToString(
            <StaticRouter location="/" context={context}>
                <NotFound />
            </StaticRouter>
        );

        expect(context.statusCode).toBe(404);
    });
});
