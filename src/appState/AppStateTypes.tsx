import { Answer } from "../screens/Quiz/fetchQuiz";

export interface AnsweredQuestion {
    answer: Answer;
    correctAnswer: Answer;
}

export interface AppState {
    answeredQuestions: AnsweredQuestion[];
}
