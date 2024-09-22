
const SiteNavBar = () => {
    return (
        <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
            <nav>
                <ul className="flex gap-4">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Event</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
            </nav>
            <div className="flex items-center">
                <input
                    type="text"
                    className="p-2 rounded-l-lg outline-none"
                    placeholder="Search"
                />
                <button className="p-2 bg-white text-black rounded-r-lg">🔍</button>
            </div>
        </header>
    );
};

export default SiteNavBar;