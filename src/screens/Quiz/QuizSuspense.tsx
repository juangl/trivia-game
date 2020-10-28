import { Suspense } from "react";
import { Questions } from "./Questions";

export function QuizSuspense() {
    if (typeof window !== "object") return null;
    return (
        <Suspense fallback={null}>
            <Questions />
        </Suspense>
    );
}
