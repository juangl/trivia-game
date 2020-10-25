import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Document } from "./components/Document";

// hydrates the entire document
reactDOM.hydrate(
    <BrowserRouter>
        <Document />
    </BrowserRouter>,
    (document as any) as Element
);
