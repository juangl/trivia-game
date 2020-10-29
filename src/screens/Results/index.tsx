import { Link } from "react-router-dom";
import {
    AnsweredQuestion,
    answerQuestion,
    getAnsweredQuestions,
    resetState,
    useAppStateContext,
} from "../../appState";
import { Button } from "../../components/Button";
import { NUMBER_OF_QUESTIONS } from "../Quiz/fetchQuiz";
import { QuestionResult } from "./QuestionResult";

export function Results() {
    let [state, dispatch] = useAppStateContext();
    // let answeredQuestions = getAnsweredQuestions(state);
    // console.log(answeredQuestions);

    const answeredQuestions = [
        {
            question: "The Kingdom of Prussia briefly held land in Estonia.",
            answer: "True",
            correctAnswer: "False",
            id: 0,
        },
        {
            question:
                "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
            answer: "True",
            correctAnswer: "False",
            id: 1,
        },
        {
            question: "DHCP stands for Dynamic Host Configuration Port.",
            answer: "True",
            correctAnswer: "False",
            id: 2,
        },
        {
            question:
                "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
            answer: "True",
            correctAnswer: "False",
            id: 3,
        },
        {
            question:
                "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
            answer: "True",
            correctAnswer: "False",
            id: 4,
        },
        {
            question:
                "Nazi Germany surrendered on Harry Truman&#039;s birthday while he was president.",
            answer: "True",
            correctAnswer: "True",
            id: 5,
        },
        {
            question:
                "The weapon Clint Eastwood uses in &quot;Dirty Harry&quot; was a .44 Automag.",
            answer: "True",
            correctAnswer: "False",
            id: 6,
        },
        {
            question:
                "Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.",
            answer: "True",
            correctAnswer: "False",
            id: 7,
        },
        {
            question:
                "The man that shot Alexander Hamilton was named Aaron Burr.",
            answer: "True",
            correctAnswer: "True",
            id: 8,
        },
        {
            question:
                "The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.",
            answer: "True",
            correctAnswer: "True",
            id: 9,
        },
    ] as AnsweredQuestion[];

    let correctAnswers = answeredQuestions
        .map((question) => question.answer === question.correctAnswer)
        .filter(Boolean).length;

    return (
        <div
            className="bg-gradient-to-tr from-secondary to-tertiary w-full rounded-3xl shadow-inner-white px-6 pt-12 pb-12 text-white"
            style={{ maxWidth: "500px" }}
        >
            <h1 className="font-sans-serif font-black leading-none text-3xl mb-6">
                You scored {correctAnswers}/{NUMBER_OF_QUESTIONS}
            </h1>

            <div>
                <ul className="list-none">
                    {answeredQuestions.map((answeredQuestionData) => (
                        <QuestionResult
                            key={answeredQuestionData.id}
                            answeredQuestionData={answeredQuestionData}
                        />
                    ))}
                </ul>
            </div>

            <div className="mt-16 flex items-center justify-center">
                <Button
                    as={Link}
                    onClick={() => {
                        dispatch(resetState());
                    }}
                    to="/quiz"
                    className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white"
                    text="Try again"
                />
            </div>
        </div>
    );
}
