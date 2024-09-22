

const Card = ({title, price}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-600">{price}</p>
        </div>
    );
};

export default Card;