import React from "react";
import { AssetManifestInjector, AssetManifest } from "./AssetManifest";

declare global {
    interface Window {
        __ASSET_MANIFEST__: AssetManifest;
    }
}

interface DocumentProps {
    assetManifest?: AssetManifest;
}
export function Document(props: DocumentProps) {
    let localAssetManifest =
        props.assetManifest || (window.__ASSET_MANIFEST__ as AssetManifest);
    return (
        <html>
            <head>
                <title>Trivia Game!</title>
                <AssetManifestInjector assetManifest={localAssetManifest} />
                <script src={localAssetManifest['criticalMain.js']} />
            </head>
            <body>
                <script src={localAssetManifest['main.js']} />
            </body>
        </html>
    );
}
