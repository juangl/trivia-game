export interface AssetManifest {
    "main.js": string;
    "criticalMain.js": string;
    "stylesheet.css": string;
}

interface AssetManifestInjectorProps {
    assetManifest: AssetManifest;
}
export function AssetManifestInjector(props: AssetManifestInjectorProps) {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `window.__ASSET_MANIFEST__ = JSON.parse(\`${JSON.stringify(
                    props.assetManifest
                )}\`);`,
            }}
        />
    );
}
