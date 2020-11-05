import React from "react";
import { AppStateProvider } from "../appState/AppStateProvider";
import { AssetManifestInjector, AssetManifest } from "./AssetManifest";
import { BaseLayout } from "./BaseLayout";
import { Router } from "./Router";

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
        props.assetManifest || (window.__ASSET_MANIFEST__);
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Trivia Game!</title>
                <AssetManifestInjector assetManifest={localAssetManifest} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Bebas+Neue&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href={localAssetManifest["stylesheet.css"]}
                />
                <script src={localAssetManifest["criticalMain.js"]} />
            </head>
            <body>
                <BaseLayout>
                    <AppStateProvider>
                        <Router />
                    </AppStateProvider>
                </BaseLayout>
                <script src={localAssetManifest["main.js"]} />
            </body>
        </html>
    );
}
