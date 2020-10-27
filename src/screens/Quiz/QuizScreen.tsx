import { fetchQuiz } from "./fetchQuiz";

let resource = fetchQuiz();

export function QuizScreen() {
    const quiz = resource.read();
    console.log(quiz);
    return (
        <div
            className="bg-gradient-to-tr from-primary to-secondary w-full rounded-3xl shadow-inner-white px-6 pt-12 pb-12 text-white"
            style={{ maxWidth: "500px" }}
        ></div>
    );
}
