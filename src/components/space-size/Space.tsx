
export const Space = () => {
    return (
        <>
            <div>
                <div className="bg-bermuda text-white font-bold m-3">
                    box with margin
                </div>

                <div className="bg-bubble-gum text-white font-bold p-3">
                    box with padding
                </div>

                <h1 className="text-xl font-bold">
                    this is my title
                </h1>

                <div className="flex ">
                    <div className="w-1/5 h-6 bg-bubble-gum"></div>
                    <div className="w-4/5 h-6 bg-tahiti"></div>
                </div>

                <div>
                    <h1 className="mb-4">first title</h1>
                    <h2 className="mb-3">second title</h2>
                    <h3 className="mb-2">third title</h3>
                    <p className="mb-1">paragraph</p>
                </div>
            </div>
        </>
    )
}
