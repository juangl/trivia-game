import { Route } from "react-router-dom";

interface StatusProps {
    code: number;
    children: React.ReactNode;
}
export function Status(props: StatusProps) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.statusCode = props.code;
                }
                return props.children;
            }}
        />
    );
}
