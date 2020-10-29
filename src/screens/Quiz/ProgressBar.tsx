import {
    getAnsweredQuestions,
    useAppStateContext,
} from "../../appState";
import { NUMBER_OF_QUESTIONS } from "./fetchQuiz";

export function ProgressBar() {
    let [state] = useAppStateContext();
    let answeredQuestions = getAnsweredQuestions(state);

    return (
        <div
            className={` absolute top-0 left-0 right-0 h-5 transform origin-left duration-500 transition ease-in-out transition-width`}
            style={{
                background: `repeating-linear-gradient(
                    45deg,
                    #e09,
                    #e09 25%,
                    #d6008a 25%,
                    #d6008a 50%,
                    #e09 50%
                  ) top left fixed`,

                backgroundSize: "30px 30px",
                width: `${
                    answeredQuestions.length * (100 / NUMBER_OF_QUESTIONS)
                }%`,
            }}
        ></div>
    );
}
