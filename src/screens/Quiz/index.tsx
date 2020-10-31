import { QuizSuspense } from "./QuizSuspense";
import { ProgressBar } from "./ProgressBar";
import { motion } from "framer-motion";

/**
 * this component is just a wrapper to render the fallback. Will render only on
 * the client
 */
export function Quiz() {
    return (
        <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
            className="bg-white w-full rounded-3xl px-6 pt-12 pb-12 text-white overflow-hidden break-words relative my-5"
            style={{ maxWidth: "500px", hyphens: "auto" }}
        >
            <ProgressBar />
            <QuizSuspense />
        </motion.div>
    );
}
