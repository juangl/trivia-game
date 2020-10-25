import { Status } from "../components/Status";

export function NotFound() {
    return (
        <Status code={404}>
            <div>
                <h1>Sorry, can’t find that.</h1>
            </div>
        </Status>
    );
}
