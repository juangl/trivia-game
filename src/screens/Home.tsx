import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowRightShort } from "../components/icons/ArrowRightShort";
import { motion } from "framer-motion";

export function Home() {
    return (
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-tr from-primary to-secondary w-full rounded-3xl shadow-inner-white px-6 pt-12 pb-12 text-white my-5"
            style={{ maxWidth: "500px" }}
        >
            <div>
                <h1 className="font-sans-serif font-black leading-none text-5xl mb-6">
                    Welcome to the trivia Challenge!
                </h1>

                <h2 className="font-body font-bold text-gray-800 text-lg leading-tight">
                    You will be presented with 10 True or False questions.
                </h2>
            </div>

            <div className="mt-16 flex items-center justify-end space-x-6">
                <p className="font-body text-base leading-none">
                    Can you score 100%?
                </p>

                <Button
                    as={Link}
                    to="/quiz"
                    className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white"
                    text="Begin"
                    rightElement={<ArrowRightShort className="w-8 h-8" />}
                />
            </div>
        </motion.div>
    );
}
