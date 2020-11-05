import { AssetManifest } from "../components/AssetManifest";

declare global {
    interface Window {
        __DATA_RESOLVER__: ReturnType<typeof fetch>;
        __FETCH_DATA__(): void;
        __ASSET_MANIFEST__: AssetManifest;
    }
}
