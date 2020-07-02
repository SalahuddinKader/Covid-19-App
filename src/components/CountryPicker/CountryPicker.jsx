import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [Country, setCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountries());
    };
    fetchAPI();
  }, [setCountry]);

  return (
    <div className={styles.formControl}>
      <FormControl>
        <NativeSelect
          defaultValue=" "
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {Country.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
