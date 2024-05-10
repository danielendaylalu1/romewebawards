"use client";
import React, { useState } from "react";
import Select from "react-select";

const DonateForm = () => {
  const currencyOptions = [
    { value: "CAD", label: "CAD", icon: "€" },
    { value: "USD", label: "USD", icon: "$" },
    { value: "GBP", label: "GBP", icon: "£" },
    { value: "AUD", label: "AUD", icon: "$" },
    { value: "JPY", label: "CAD", icon: "¥" },
    { value: "EUR", label: "EUR", icon: "€" },
    { value: "CHF", label: "CHF", icon: "CHF" },
    { value: "CZK", label: "CZK", icon: "CZK" },
    { value: "DKK", label: "DKK", icon: "DKK" },
    { value: "HKD", label: "HKD", icon: "$" },
    { value: "HUF", label: "HUF", icon: "HUF" },
    { value: "NOK", label: "NOK", icon: "NOK" },
    { value: "NZD", label: "NZD", icon: "$" },
    { value: "PLN", label: "PLN", icon: "PLN" },
    { value: "SEK", label: "SEK", icon: "SEK" },
    { value: "SGD", label: "SGD", icon: "$" },
  ];
  const [selected, setSelected] = useState(currencyOptions[0]);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: "130px",
      fontSize: "13px",
    }),
  };
  return (
    <div className="flex flex-col gap-y-2 self-start">
      <p className="text-white/65 text-xs font-light">Donate to us!</p>
      <p className="text-white/65 text-xs font-light">Enter Amount</p>
      <div className="">
        <span className="text-white/65">{selected.icon}</span>
        <input
          type="text"
          className="border-none h-[25px] max-w-[50px] ml-1 outline-none py-1 px-2 text-sm"
        />
        <Select
          className="my-2"
          //   classNamePrefix="select"
          value={selected}
          defaultValue={currencyOptions[0]}
          name="color"
          options={currencyOptions}
          onChange={(selectedOption) => setSelected(selectedOption)}
          styles={customStyles}
        />
        <button className="shadow-black shadow-md text-sm border-none bg-yellow-400 py-[6px] px-3 rounded-md font-normal self-start">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonateForm;
