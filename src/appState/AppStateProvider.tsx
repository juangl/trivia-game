import React from "react";
import { AppStateContext } from "./AppStateContext";
import { useAppStateReducer } from "./AppStateHooks";

interface AppStateProviderProps {}
export function AppStateProvider(
    props: React.PropsWithChildren<AppStateProviderProps>
) {
    let appStateReducer = useAppStateReducer();
    return (
        <AppStateContext.Provider value={appStateReducer}>
            {props.children}
        </AppStateContext.Provider>
    );
}
