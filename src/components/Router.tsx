import { Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { NotFound } from "../screens/NotFound";
import { Quiz } from "../screens/Quiz";

export function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" exact component={Quiz} />
            <Route component={NotFound} />
        </Switch>
    );
}
