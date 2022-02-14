import react, { useEffect, useState } from "react";
import Search from "./components/Search";
import CryptoPrice from "./components/CryptoPrice";

const API_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';


const App = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  const callApi = async () => {
    const res = await fetch(API_url);
    const data = await res.json();
    console.log(data);
    setCoin(data);
  }

  useEffect(() => {
    callApi();
  }, [])

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  const filterCoin = coin.filter((ele) => {
    return ele.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <>
      <Search onInputChange={onInputChange} />
      <div className="container">
        {filterCoin.map((ele) => {
          return (
            <>
              <CryptoPrice key={ele.id} data={ele} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default App;