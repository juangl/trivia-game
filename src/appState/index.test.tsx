import { appInitialState, AppStateAction, appStateReducer } from ".";

describe("appStateReducer", () => {
    it("should throw an error when no action is passed", () => {
        // unlike Redux reducers where they return the initial state when the
        // action isn't recognized, useReducer reducers should throw
        expect(() =>
            appStateReducer(appInitialState, {} as AppStateAction)
        ).toThrowError(/unexpected action type/i);
    });
});
