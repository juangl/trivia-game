import React from "react";
import { AppStateActions, appStateInitialValue } from "./AppStateHooks";
import { AppState } from "./AppStateTypes";

export interface AppStateContextValue {
    state: AppState;
    dispatch: React.Dispatch<AppStateActions>;
}

export let AppStateContext = React.createContext<AppStateContextValue>({
    state: appStateInitialValue,
    dispatch: () => {
        throw Error("Please wrap your component with the AppStateProvider");
    },
});
