// turn this file into a module
export {};

// the easiest way to share stuff across bundles is through the global `window`
window.__FETCH_DATA__ = function fetchData() {
    window.__DATA_RESOLVER__ = fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
};

window.__FETCH_DATA__();
