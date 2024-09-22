import React from 'react';
import SiteNavBar from "@/components/SiteNavBar";
import OverView from "@/components/OverView";
import CollectionFeatured from "@/components/CollectionFeatured";
import DiscoverMore from "@/components/DiscoverMore";

const Index = () => {
    return (
        <div>
            <SiteNavBar/>
            <OverView/>
            <CollectionFeatured/>
            <DiscoverMore/>
        </div>
    );
};

export default Index;