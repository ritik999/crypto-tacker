import react from "react";
import Search from "./Search";


const CryptoPrice = (props) => {

    const { data } = props;
    console.log(data);
    return (
        <>
            <div className="inner-container">
                <div className="img-container">
                    <img src={data.image} alt="image" />
                    <p>{data.name}</p>
                </div>
                <p>{data.symbol}</p>
                <p>₹{data.current_price}</p>
                <p>₹{data.fully_diluted_valuation ? data.fully_diluted_valuation : "-----"}</p>

                {data.price_change_percentage_24h < 0 ? (<p className="red">{data.price_change_percentage_24h.toFixed(2)}%</p>) : (<p className="green">{data.price_change_percentage_24h.toFixed(2)}%</p>)}

                <p>Mkt Cap: ₹{data.market_cap}</p>
            </div>

        </>
    )

}

export default CryptoPrice;