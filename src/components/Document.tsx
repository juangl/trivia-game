import React from "react";
import { AssetManifestInjector, AssetManifest } from "./AssetManifest";
import { Router } from "./Router";
//import "../stylesheet/index.css";

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
                <meta charSet="utf-8" />
                <title>Trivia Game!</title>
                <AssetManifestInjector assetManifest={localAssetManifest} />
                <link rel="stylesheet" href={localAssetManifest["stylesheet.css"]} />
                <script src={localAssetManifest["criticalMain.js"]} />
            </head>
            <body>
                <Router />
                <script src={localAssetManifest["main.js"]} />
            </body>
        </html>
    );
}
