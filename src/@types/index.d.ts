export {};
declare global {
    interface Window {
        dataResolver: ReturnType<typeof fetch>;
    }
}
