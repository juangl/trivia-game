import { Spin } from "../../components/icons/Spin";

export function Loading() {
    return (
        <div className="flex justify-center py-20 relative">
            <Spin className="w-24 h-24 animate-spin text-primary" />
        </div>
    );
}
