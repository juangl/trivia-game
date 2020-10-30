import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
    it("should render a button element by default", () => {
        let { getByText, getByTestId } = render(
            <Button data-testid="test-button" text="test button" />
        );

        // ensures that the `text` props is being rendered
        getByText("test button");

        let buttonElement = getByTestId("test-button");
        expect(buttonElement.tagName).toBe("BUTTON");
    });

    it("should render as the component passed", () => {
        let { getByTestId } = render(
            <Button as="a" data-testid="test-button" text="test button" />
        );

        let buttonElement = getByTestId("test-button");
        expect(buttonElement.tagName).toBe("A");
    });

    it("should render the rightElement", () => {
        let { getByTestId } = render(
            <Button
                text=""
                rightElement={<span data-testid="right-element" />}
            />
        );

        getByTestId("right-element");
    });
});
