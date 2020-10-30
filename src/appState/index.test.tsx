import {
    answerQuestion,
    AnswerQuestionArgs,
    appInitialState,
    AppStateAction,
    appStateReducer,
    getAnsweredQuestions,
    resetState,
} from ".";

describe("appStateReducer", () => {
    it("should throw an error when no action is passed", () => {
        // unlike Redux reducers where they return the initial state when the
        // action isn't recognized, useReducer reducers should throw
        expect(() =>
            appStateReducer(appInitialState, {} as AppStateAction)
        ).toThrowError(/unexpected action type/i);
    });

    it("should add a new answer", () => {
        let state = appInitialState;
        let payload: AnswerQuestionArgs = {
            id: 1,
            question: "",
            answer: "True",
            correctAnswer: "False",
        };

        let newState = appStateReducer(state, answerQuestion(payload));

        // a new element should be added
        expect(getAnsweredQuestions(newState).length).toBe(1);

        // immutability
        expect(newState).not.toBe(state);
        expect(getAnsweredQuestions(newState)).not.toBe(
            getAnsweredQuestions(state)
        );
    });

    it("should reset the state", () => {
        let payload: AnswerQuestionArgs = {
            id: 1,
            question: "",
            answer: "True",
            correctAnswer: "False",
        };

        let prevState = appStateReducer(
            appInitialState,
            answerQuestion(payload)
        );
        let nextState = appStateReducer(prevState, resetState());

        expect(nextState).toBe(appInitialState);
    });
});
