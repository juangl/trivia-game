import React from "react";
import { Button } from "../../components/Button";
import { Check } from "../../components/icons/Check";
import { X } from "../../components/icons/x";
import { Answer, QuestionData } from "./fetchQuiz";

interface QuestionProps {
    questionData: QuestionData;
    onAnswer(answer: Answer): void;
}
export function Question(props: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = React.useState<
        Answer | undefined
    >();
    //cursor-not-allowed

    // return a function with name
    let handleAnswer = (answer: Answer) =>
        function answerHandler() {
            setSelectedAnswer(answer);
            props.onAnswer(answer);
        };

    return (
        <div>
            <h3
                className="font-sans-serif text-black font-black leading-tight text-4xl mb-6"
                dangerouslySetInnerHTML={{
                    // let's trust this API
                    __html: props.questionData.question,
                }}
            />

            <div className="flex justify-around">
                <Button
                    disabled={Boolean(selectedAnswer)}
                    className={`disabled:pointer-events-none focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600 text-white ${
                        selectedAnswer === "False" ? "opacity-50" : ""
                    }`}
                    text="True"
                    rightElement={<Check className="w-8 h-8" />}
                    onClick={handleAnswer("True")}
                />

                <Button
                    disabled={Boolean(selectedAnswer)}
                    className={`disabled:pointer-events-none focus:outline-none focus:shadow-outline bg-red-600 hover:bg-red-700 text-white ${
                        selectedAnswer === "True" ? "opacity-50" : ""
                    }`}
                    text="False"
                    rightElement={<X className="w-8 h-8" />}
                    onClick={handleAnswer("False")}
                />
            </div>
        </div>
    );
}
