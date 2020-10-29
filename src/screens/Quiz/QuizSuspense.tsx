import { Suspense } from "react";
import { Loading } from "./Loading";
import { Questions } from "./Questions";

export function QuizSuspense() {
    // suspense not available for SSR
    if (typeof window !== "object") return null;

    return (
        <Suspense fallback={<Loading />}>
            <Questions />
        </Suspense>
    );
}
