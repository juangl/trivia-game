import React from "react";
import { AppStateContext } from "./AppStateContext";
import { useAppStateReducer } from "./AppStateHooks";

interface AppStateProviderProps {}
export function AppStateProvider(
    props: React.PropsWithChildren<AppStateProviderProps>
) {
    let [state, dispatch] = useAppStateReducer();
    return (
        <AppStateContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </AppStateContext.Provider>
    );
}
