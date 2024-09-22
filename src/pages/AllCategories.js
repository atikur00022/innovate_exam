import React from 'react';
import Card from "@/components/Card";

const AllCategories = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Music" price="598 TK"/>
            <Card title="Gaming" price="777 TK"/>
            <Card title="Sports" price="58 TK"/>
        </div>
    );
};

export default AllCategories;