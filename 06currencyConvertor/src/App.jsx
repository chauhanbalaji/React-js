import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
    }}>
      <div className="w-full max-w-md mx-auto p-5 rounded-lg backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            onAmountChange={setAmount}
            selectCurrency={from}
          />
          <div className="text-center">
            <button type="button" className="bg-blue-600 text-white px-4 py-1 rounded my-3" onClick={swap}>
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />
          <button type="submit" className="w-full bg-blue-600 text-white mt-4 py-2 rounded">
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
