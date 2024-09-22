import React from 'react';
import { useState } from "react";
import './App.css';
import logo from './images/logo_h.png';
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const Header = ({onDataChange}) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("GB");
  const handleChange = (language) => {
    onDataChange(language);
  };
  return (
    <div className='header'>
      <div className='container'>
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => {
              setSelected(code);
              handleChange(code === "GB" ? "en" : "ar");
            }}
            countries={["GB", "EG"]}
            customLabels={{ GB: t("en"), EG: t("ar") }}
            placeholder={t("selectLanguage")}
            selectButtonClassName="menu-flags-button"
            className="menu-flags"
          />
        </nav>
    </div>
    </div>
  )
}

export default Header
