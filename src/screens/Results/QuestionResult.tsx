import { AnsweredQuestion } from "../../appState";
import { Check } from "../../components/icons/Check";
import { X } from "../../components/icons/X";

interface QuestionResultProps {
    answeredQuestionData: AnsweredQuestion;
}
export function QuestionResult(props: QuestionResultProps) {
    let isCorrectAnswer =
        props.answeredQuestionData.answer ===
        props.answeredQuestionData.correctAnswer;
    return (
        <li className="truncate ... flex items-center">
            {isCorrectAnswer ? <Check /> : <X />}
            <span
                className="truncate ... ml-2"
                dangerouslySetInnerHTML={{
                    __html: props.answeredQuestionData.question,
                }}
            />
        </li>
    );
}
