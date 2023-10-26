import React, { useState } from "react";
import Script from "next/script";
import "../../app/style.css";

function CountryWithCode({ select_id }) {
  const [ccode, setCCode] = useState("+44");

  return (
    <div className="select-box w-full border-[0.025rem] rounded-lg">
      <Script src="https://code.iconify.design/3/3.1.0/iconify.min.js" />

      <div className="selected-option">
        <div className="flex items-center">
          <p className="pr-1">
            <span className="iconify" data-icon="flag:gb-4x3"></span>
          </p>
          <p>
            <strong>+44</strong>
          </p>
        </div>
        {/* <input type="tel" name="tel" placeholder="Phone Number" /> */}
        <input
          className="w-full"
          type="tel"
          name={select_id}
          id={select_id}
          placeholder=""
          maxLength={11}
          onChange={() => {
            setCCode(document.getElementById("c_code").value);
          }}
        />
        {/* --------- */}
        <input
          type="text"
          id="c_code"
          name="c_code"
          className="hidden"
          value={ccode}
        />
      </div>
      <div className="options">
        <input
          type="text"
          className="search-box"
          placeholder="Search Country Name"
        />
        <ol></ol>
      </div>
      <Script src="/scripts/list-country.js" />
    </div>
  );
}

export default CountryWithCode;
