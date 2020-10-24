import reactDOM from "react-dom";
import { Document } from "./components/Document";

reactDOM.hydrate(<Document />, (document as any) as Element);
