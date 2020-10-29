import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    answerQuestion,
    getAnsweredQuestions,
    useAppStateContext,
} from "../../appState";
import { fetchQuiz, NUMBER_OF_QUESTIONS } from "./fetchQuiz";
import { Question } from "./Question";
import { useHistory } from "react-router-dom";

let QUESTION_SWITCH_DELAY = 800;
let resource = fetchQuiz();

export function Questions() {
    // will suspend this component until the API loads
    let quiz = resource.read();

    // get state from the store
    let [state, dispatch] = useAppStateContext();
    let answeredQuestions = getAnsweredQuestions(state);

    let [currentIndex, setCurrentIndex] = React.useState(0);
    let history = useHistory();

    let questionsData = quiz!.results;

    React.useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (answeredQuestions.length > currentIndex) {
            timeoutId = setTimeout(() => {
                if (currentIndex === NUMBER_OF_QUESTIONS - 1) {
                    // navigate to results
                    history.push("/results");
                } else {
                    setCurrentIndex((index) => index + 1);
                }
            }, QUESTION_SWITCH_DELAY);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [answeredQuestions, currentIndex, history]);

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
            >
                <Question
                    questionData={questionsData[currentIndex]}
                    onAnswer={(answer) => {
                        // using inline functions to get type inference
                        dispatch(
                            answerQuestion({
                                question: questionsData[currentIndex].question,
                                answer,
                                correctAnswer:
                                    questionsData[currentIndex].correct_answer,
                                id: currentIndex,
                            })
                        );
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
