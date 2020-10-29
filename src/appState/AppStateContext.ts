import React from "react";
import {
    AnswerActions,
    AppState,
    initialAppState,
    useAppStateReducer,
} from ".";

export interface AppStateContextValue {
    state: AppState;
    dispatch: React.Dispatch<AnswerActions>;
}

export let AppStateContext = React.createContext<
    ReturnType<typeof useAppStateReducer>
>([
    initialAppState,
    () => {
        throw Error("Please wrap your component with the AppStateProvider");
    },
]);
