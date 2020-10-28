import React from "react";
import { AppStateContext } from "./AppStateContext";
import { AnsweredQuestion, AppState } from "./AppStateTypes";

export type AppStateActions = { type: "test" };

function appStateReducer(state: AppState, action: AppStateActions) {
    switch (action.type) {
        case "test":
            return state;
        default:
            throw new Error("unexpected action type");
    }
}

export let appStateInitialValue = {
    answeredQuestions: [] as AnsweredQuestion[],
};

export function useAppStateReducer() {
    return React.useReducer(appStateReducer, appStateInitialValue);
}

export function useAppStateContext() {
    return React.useContext(AppStateContext);
}
