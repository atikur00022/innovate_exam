

const OverView = () => {
    return (
        <section className="flex justify-between items-center p-10 pb-40 bg-overViewColor mt-60">
            <div className="w-1/2">
                <h2 className="text-4xl font-bold mb-4">Overview</h2>
                <p className="text-lg w-[428px] h-[174px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="flex gap-4">
                <div className="w-[328px] h-[426px] bg-box1 mt-[-200px]"></div>
                <div className="w-[234px] h-[304px] bg-box2 mt-[-200px]"></div>
                <div className="w-[234px] h-[304px] bg-box3 mt-[-200px]"></div>
            </div>
        </section>
    );
};

export default OverView;