import Link from "next/link";
import Card from "@/components/Card";
import React from "react";

const DiscoverMore = () => {
    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold mb-6">Discover More</h2>
            <div className="flex gap-2 mb-6">
                <Link className="cursor-pointer" href='/'>All Categories</Link>
                <Link className="cursor-pointer" href='/art'>Art</Link>
                <Link className="cursor-pointer" href='/celebrities'>Celebrities</Link>
                <Link className="cursor-pointer" href='/gaming'>Gaming</Link>
                <Link className="cursor-pointer" href='/sports'>Sport</Link>
                <Link className="cursor-pointer" href='/music'>Music</Link>
            </div>
        </section>
    );
};

export default DiscoverMore;