import React from "react";
import {
    AppState,
    appInitialState,
    useAppStateReducer,
    AppStateAction,
} from ".";

export interface AppStateContextValue {
    state: AppState;
    dispatch: React.Dispatch<AppStateAction>;
}

export let AppStateContext = React.createContext<
    ReturnType<typeof useAppStateReducer>
>([
    appInitialState,
    () => {
        throw Error("Please wrap your component with the AppStateProvider");
    },
]);
