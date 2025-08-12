import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex justify-between gap-2 mb-2">
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-1 block">{label}</label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent border border-gray-300 px-2 py-1 rounded"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 text-right">
        <label className="text-black/40 mb-1 block">Currency</label>
        <select
          className="w-full rounded px-2 py-1 bg-gray-100 outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
