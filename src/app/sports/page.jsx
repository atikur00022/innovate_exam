import React from 'react';
import Card from "@/components/Card";
import Index from "@/pages";

const Sports = () => {
    return (
        <div>
            <Index/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Sports" price="598 TK"/>
                <Card title="Sports" price="777 TK"/>
                <Card title="Sports" price="58 TK"/>
            </div>
        </div>
    );
};

export default Sports;