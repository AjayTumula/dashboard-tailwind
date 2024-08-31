


export const RevenueCard = ({
    title,
    orderCount,
    amount, 
}) => {
    return <div className="bg-white rounded shadow-md pd-4">
        <div className="text-gray-700">
            {title}
            ?
        </div>
        <div className="flex justify-between">
            <div>
                R {amount}
            </div>
            {orderCount ? <div>
                {orderCount} order(s) {">"}
            </div> : null}
        </div>
    </div>
}