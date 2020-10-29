import React from "react";
import {
    AnswerActions,
    appStateInitialValue,
    useAppStateReducer,
} from "./AppStateHooks";
import { AppState } from "./AppStateTypes";

export interface AppStateContextValue {
    state: AppState;
    dispatch: React.Dispatch<AnswerActions>;
}

export let AppStateContext = React.createContext<
    ReturnType<typeof useAppStateReducer>
>([
    appStateInitialValue,
    () => {
        throw Error("Please wrap your component with the AppStateProvider");
    },
]);
