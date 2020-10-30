import { resetState, useAppStateContext } from ".";
import { renderHook } from "@testing-library/react-hooks";

describe("<AppStateContextProvider />", () => {
    it("should throw if dispatch is called in a component out of the AppStateContextProvider tree", () => {
        let { result } = renderHook(() => useAppStateContext());

        let dispatch = result.current[1];
        expect(() => dispatch(resetState())).toThrowError(
            /Please wrap your component with the AppStateProvider/i
        );
    });
});
