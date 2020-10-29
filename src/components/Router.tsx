import { Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { NotFound } from "../screens/NotFound";
import { Quiz } from "../screens/Quiz";
import { Results } from "../screens/Results";

export function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" exact component={Quiz} />
            <Route path="/results" exact component={Results} />
            <Route component={NotFound} />
        </Switch>
    );
}
