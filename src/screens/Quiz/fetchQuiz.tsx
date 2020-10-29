import { Answer } from "../../appState";

export interface QuestionData {
    correct_answer: Answer;
    question: string;
}

interface APIPayload {
    response_code: number;
    results: QuestionData[];
}

type SuspenseStatus = "pending" | "success" | "error";
export let NUMBER_OF_QUESTIONS = 10;
let status: SuspenseStatus;
let result: APIPayload;
let suspender: Promise<void>;

export let quizResource = {
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

function initializeQuizResource() {
    status = "pending";
    suspender = window.__DATA_RESOLVER__
        .then((response) => response.json())
        .then(
            (r) => {
                status = "success";
                result = r;
            },
            (e) => {
                status = "error";
                result = e;
            }
        );
}

// quicks-off another API call
export function resetQuizResource() {
    window.__FETCH_DATA__();
    initializeQuizResource();
}

// initialize this values only on the client. On the server they aren't used
if (typeof window === "object") {
    initializeQuizResource();
}
