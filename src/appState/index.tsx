import React from "react";

import { AppStateContext } from "./AppStateContext";

export type Answer = "True" | "False";

export interface AnsweredQuestion {
    question: string;
    answer: Answer;
    correctAnswer: Answer;
    id: number;
}

export interface AppState {
    answeredQuestions: AnsweredQuestion[];
}

//
// action creators
//

interface AnswerQuestionArgs {
    question: string;
    answer: Answer;
    correctAnswer: Answer;
    id: number;
}

export let answerQuestion = ({
    question,
    answer,
    correctAnswer,
    id,
}: AnswerQuestionArgs) => ({
    type: "ANSWER_QUESTION" as const,
    question,
    answer,
    correctAnswer,
    id,
});

export let resetState = () => ({
    type: "RESET_STATE" as const,
});

//
// selectors
//

export let getAnsweredQuestions = (state: AppState) => state.answeredQuestions;

// Discriminating Union including all the possible actions
export type AppStateAction =
    | ReturnType<typeof answerQuestion>
    | ReturnType<typeof resetState>;

export let appInitialState = {
    answeredQuestions: [] as AnsweredQuestion[],
};

export function appStateReducer(
    state: AppState,
    action: AppStateAction
): AppState {
    switch (action.type) {
        case "ANSWER_QUESTION":
            let answeredQuestions = state.answeredQuestions;
            return {
                ...state,
                answeredQuestions: [
                    ...answeredQuestions,
                    {
                        question: action.question,
                        answer: action.answer,
                        correctAnswer: action.correctAnswer,
                        id: action.id,
                    },
                ],
            };
        case "RESET_STATE":
            return appInitialState;
        default:
            throw new Error("unexpected action type");
    }
}

export function useAppStateReducer() {
    return React.useReducer(appStateReducer, appInitialState);
}

export function useAppStateContext() {
    return React.useContext(AppStateContext);
}
