import { Button } from "../../components/Button";
import { Check } from "../../components/icons/Check";
import { X } from "../../components/icons/x";
import { QuestionData } from "./fetchQuiz";

interface QuestionProps {
    questionData: QuestionData;
}
export function Question(props: QuestionProps) {
    // const [selectedAnswer, setSelectedAnswer] =
    //cursor-not-allowed opacity-50
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
                    className="focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600 text-white"
                    text="True"
                    rightElement={<Check className="w-8 h-8" />}
                />

                <Button
                    className="focus:outline-none focus:shadow-outline bg-red-600 hover:bg-red-700 active:bg-red-700 text-white "
                    text="False"
                    rightElement={<X className="w-8 h-8" />}
                />
            </div>
        </div>
    );
}
