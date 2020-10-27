function wrapPromise<T>(promise: Promise<T>) {
    let status = "pending";
    let result: T;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result!;
            }
        },
    };
}


type Answer = 'True' | 'False';

interface Question {
    correct_answer: Answer;
    question: string;
};

interface APIPayload {
    response_code: number;
    results: Question[];
}
export function fetchQuiz() {
    let resolver: Promise<APIPayload> = Promise.resolve({
        response_code: 0,
        results: []
    });

    if (typeof window === "object") {
        resolver = window.dataResolver.then((response) => response.json());
    }

    return wrapPromise(resolver);
}
