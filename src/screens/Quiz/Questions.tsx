import React from "react";
import { fetchQuiz } from "./fetchQuiz";
import { Question } from "./Question";

let resource = fetchQuiz();

export function Questions() {
    // will suspend this component until the API loads
    let quiz = resource.read();

    let [currentIndex, setCurrentIndex] = React.useState(0);
    return <Question questionData={quiz!.results[currentIndex]} />;
}
