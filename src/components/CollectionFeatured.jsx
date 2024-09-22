

const CollectionFeatured = () => {
    return (
        <section className="flex justify-between p-10">
            <div className="mt-10">
                <div className="w-[408px] h-[408px] bg-CBox1 rounded-3xl mb-4"></div>
                <div className="flex gap-4">
                    <div className="w-[120px] h-[120px] rounded-3xl bg-CBox2"></div>
                    <div className="w-[120px] h-[120px] rounded-3xl bg-CBox3"></div>
                    <div className="w-[120px] h-[120px] rounded-3xl bg-CBox4"></div>
                </div>
            </div>
            <div className='mt-40'>
                <div className="">
                    <h3 className="text-3xl font-bold">Collection Featured</h3>
                    <p className="text-lg mt-2 w-[428px] h-[174px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CollectionFeatured;