import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    answerQuestion,
    getAnsweredQuestions,
    useAppStateContext,
} from "../../appState/AppStateHooks";
import { fetchQuiz } from "./fetchQuiz";
import { Question } from "./Question";

let QUESTION_SWITCH_DELAY = 800;
let resource = fetchQuiz();

export function Questions() {
    // will suspend this component until the API loads
    let quiz = resource.read();
    let questionsData = quiz!.results;
    let [state, dispatch] = useAppStateContext();
    let answeredQuestions = getAnsweredQuestions(state);

    let [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (answeredQuestions.length > currentIndex) {
            timeoutId = setTimeout(() => {
                if (currentIndex === 9) {
                    // navigate to results
                } else {
                    setCurrentIndex((index) => index + 1);
                }
            }, QUESTION_SWITCH_DELAY);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [answeredQuestions, currentIndex]);

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
                            answerQuestion(
                                questionsData[currentIndex].question,
                                answer,
                                questionsData[currentIndex].correct_answer
                            )
                        );
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
