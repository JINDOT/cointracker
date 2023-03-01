import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // 일반적으로 공백을 남기면 undefined error
  const [coins, setCoins] = useState([]);
  // useEffect >> empty array면 한 번만 작동
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>

  );
}

export default App;
