import { render as rtlRender } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { AppStateProvider } from "../appState/AppStateProvider";
import { Router } from "react-router";

type RTLRenderOptions = Parameters<typeof rtlRender>[0];
interface RenderOptions extends RTLRenderOptions {
    history?: MemoryHistory;
    route?: string;
}

interface WrapperProps {
    children: React.ReactNode;
}

/**
 * utility to render react components with app providers
 */
export function render(ui: React.ReactElement, options?: RenderOptions) {
    let {
        route = "/",
        history = createMemoryHistory({
            initialEntries: [route],
        }),

        ...rest
    } = options || ({} as RenderOptions);

    function Wrapper({ children }: WrapperProps) {
        return (
            <Router history={history}>
                <AppStateProvider>{children}</AppStateProvider>
            </Router>
        );
    }

    return {
        history,
        ...rtlRender(ui, {
            wrapper: Wrapper as React.FunctionComponent,
            ...rest,
        }),
    };
}
