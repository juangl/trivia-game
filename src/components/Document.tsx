import React from "react";
import { AssetManifestInjector, AssetManifest } from "./AssetManifest";
import { Route } from "react-router-dom";

declare global {
    interface Window {
        __ASSET_MANIFEST__: AssetManifest;
    }
}

interface DocumentProps {
    assetManifest?: AssetManifest;
}

function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.statusCode = code;
                }
                return children;
            }}
        />
    );
}

function NotFound() {
    return (
        <Status code={404}>
            <div>
                <h1>Sorry, can’t find that.</h1>
            </div>
        </Status>
    );
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
                <script src={localAssetManifest["criticalMain.js"]} />
            </head>
            <body>
                <Route component={NotFound} />
                <script src={localAssetManifest["main.js"]} />
            </body>
        </html>
    );
}
