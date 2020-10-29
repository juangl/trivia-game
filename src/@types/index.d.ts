export {};
declare global {
    interface Window {
        __DATA_RESOLVER__: ReturnType<typeof fetch>;
        __FETCH_DATA__(): void;
    }
}
