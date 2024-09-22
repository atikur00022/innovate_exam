import React from 'react';
import Card from "@/components/Card";
import Index from "@/pages";

const Celebrities = () => {
    return (
        <div>
            <Index/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Celebrities" price="598 TK"/>
                <Card title="Celebrities" price="777 TK"/>
                <Card title="Celebrities" price="58 TK"/>
            </div>
        </div>
    );
};

export default Celebrities;