export function Home() {
    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div
                className="w-full rounded-lg shadow-xl overflow-hidden relative px-8 pt-16 pb-32 bg-indigo-600 text-white"
                style={{ maxWidth: "500px" }}
            >
                <h3 className="text-3xl font-semibold text-indigo-100 leading-tight mb-10 relative z-10">
                    Hello 245
                </h3>
                <div className="w-full mb-10">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                    </div>
                    <p className="text-sm text-gray-600 text-center px-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nam obcaecati laudantium recusandae, debitis eum
                        voluptatem ad, illo voluptatibus temporibus odio
                        provident
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                        ”
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">
                        Scott Windon
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                        @scott.windon
                    </p>
                </div>
            </div>
        </div>
    );
}
