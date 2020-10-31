import { Link, Redirect } from "react-router-dom";
import {
    getAnsweredQuestions,
    resetState,
    useAppStateContext,
} from "../../appState";
import { Button } from "../../components/Button";
import { ArrowClockwise } from "../../components/icons/ArrowClockWise";
import { NUMBER_OF_QUESTIONS, resetQuizResource } from "../Quiz/fetchQuiz";
import { QuestionResult } from "./QuestionResult";
import { motion } from "framer-motion";

export function Results() {
    let [state, dispatch] = useAppStateContext();
    let answeredQuestions = getAnsweredQuestions(state);

    if (answeredQuestions.length === 0) {
        return <Redirect to="/quiz" />;
    }

    let correctAnswers = answeredQuestions
        .map((question) => question.answer === question.correctAnswer)
        .filter(Boolean).length;

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
            className="bg-gradient-to-tr from-secondary to-tertiary w-full rounded-3xl shadow-inner-white px-6 pt-12 pb-12 text-white my-5 overflow-hidden"
            style={{ maxWidth: "500px" }}
        >
            <h1 className="font-sans-serif font-black leading-none text-3xl mb-6">
                You scored {correctAnswers}/{NUMBER_OF_QUESTIONS}
            </h1>

            <div>
                <ul className="list-none">
                    {answeredQuestions.map((answeredQuestionData, index) => (
                        <QuestionResult
                            index={index}
                            key={answeredQuestionData.id}
                            answeredQuestionData={answeredQuestionData}
                        />
                    ))}
                </ul>
            </div>

            <div className="mt-5 flex items-center justify-center">
                <Button
                    as={Link}
                    onClick={() => {
                        // quick-off another API call
                        resetQuizResource();
                        // reset app state
                        dispatch(resetState());
                    }}
                    to="/quiz"
                    className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white"
                    text="Try again"
                    rightElement={<ArrowClockwise className="w-5 h-5 ml-2" />}
                />
            </div>
        </motion.div>
    );
}
