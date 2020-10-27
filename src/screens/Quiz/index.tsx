import { Suspense } from "react";
import { QuizScreen } from "./QuizScreen";

/**
 * this component is just a wrapper to render the fallback. Will render only on
 * the client
 */
export function Quiz() {
    if (typeof window !== "object") return null;
    return (
        <Suspense fallback={null}>
            <QuizScreen />
        </Suspense>
    );
}
