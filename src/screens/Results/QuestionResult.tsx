import { motion } from "framer-motion";
import { AnsweredQuestion } from "../../appState";
import { Check } from "../../components/icons/Check";
import { X } from "../../components/icons/X";

interface QuestionResultProps {
    answeredQuestionData: AnsweredQuestion;
    index: number;
}
export function QuestionResult(props: QuestionResultProps) {
    let isCorrectAnswer =
        props.answeredQuestionData.answer ===
        props.answeredQuestionData.correctAnswer;

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
            },
        }),
        hidden: { opacity: 0, x: -100 },
    };
    return (
        <motion.li
            custom={props.index}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="truncate ... flex items-center mb-4 py-2 px-3 text-gray-800 bg-white rounded-lg"
        >
            {isCorrectAnswer ? (
                <Check className="w-8 h-8 flex-shrink-0 text-green-700" />
            ) : (
                <X className="w-8 h-8 flex-shrink-0 text-red-600" />
            )}
            <span
                className="truncate ... ml-2"
                dangerouslySetInnerHTML={{
                    __html: props.answeredQuestionData.question,
                }}
            />
        </motion.li>
    );
}
