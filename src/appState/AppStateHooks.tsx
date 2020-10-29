import React from "react";
import { Answer } from "../screens/Quiz/fetchQuiz";
import { AppStateContext } from "./AppStateContext";
import { AnsweredQuestion, AppState } from "./AppStateTypes";

//
// action creators
//

export let answerQuestion = (
    question: string,
    answer: Answer,
    correctAnswer: Answer
) => ({
    type: "ANSWER_QUESTION",
    question,
    answer,
    correctAnswer,
});

export type AnswerActions = ReturnType<typeof answerQuestion>;

//
// selectors
//

export let getAnsweredQuestions = (state: AppState) => state.answeredQuestions;

// add new actions here
type AppStateActions = AnswerActions;

function appStateReducer(state: AppState, action: AppStateActions) {
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
                    },
                ],
            };
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
