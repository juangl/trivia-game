import { render } from "../tests/testUtils";
import { Home } from "./Home";
import userEvent from "@testing-library/user-event";

describe("<Home /> screen", () => {
    it("should navigate to the quiz page on the begin link click", () => {
        const { history, getByText } = render(<Home />);

        // get the parent link wrapper of this text
        const link = getByText(/begin/i).closest("a")!;
        userEvent.click(link);

        expect(history.location.pathname).toBe("/quiz");
    });
});
