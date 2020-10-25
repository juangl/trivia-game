import { Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { NotFound } from "../screens/NotFound";

export function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
}
