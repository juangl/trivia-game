import { QuizSuspense } from "./QuizSuspense";
import { ProgressBar } from "./ProgressBar";

/**
 * this component is just a wrapper to render the fallback. Will render only on
 * the client
 */
export function Quiz() {
    return (
        <div
            className="bg-white w-full rounded-3xl px-6 pt-12 pb-12 text-white overflow-hidden break-words relative"
            style={{ maxWidth: "500px", hyphens: "auto" }}
        >
            <ProgressBar />
            <QuizSuspense />
        </div>
    );
}
