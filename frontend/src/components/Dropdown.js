import React from 'react';
import SEPractices from "../dummydata/SE-Practices" 
  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = () => {
    return (
        <div>
             <select>
             <option value="">Select an SE Practice </option>
                {optionItems}
             </select>
         </div>
    )
  }
  export default Dropdown;