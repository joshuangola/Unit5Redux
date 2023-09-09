import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay)
    return <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}:</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png} alt="The flag" />
            ) : "No data found!"}
        </div>
        <div className="stack">
            <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
            {currentDisplay.coatOfArms ? (
                <img src={currentDisplay.coatOfArms.png} alt="The coat of arms" />
            ) : "No data found!"}
        </div>
    </div>;
}

export default Symbols;