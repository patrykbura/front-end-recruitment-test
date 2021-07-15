import './Select.scss'
import React, { useState } from 'react'

const Select = (props) => {
  // const [opened, setOpened] = useState(false);

  // const dropDown = function (elementId) {
  //   var dropdown = document.getElementById(elementId);
  //   try {
  //       showDropdown(dropdown);
  //   } catch(e) {
  //     console.log(e)
  //   }
  //   return false;
  // };

  // const showDropdown = function (element) {
  //     var event;
  //     event = document.createEvent('MouseEvents');
  //     event.initMouseEvent('mousedown', true, true, window);
  //     element.dispatchEvent(event);
  // };

//   function openSelect(selectId) {
//     var event = new MouseEvent('mousedown', {
//         'view': window,
//         'bubbles': true,
//         'cancelable': true
//     });
//     var cb = document.getElementById(selectId);
//     cb.size=4;
//     cb.dispatchEvent(event);
// }

  return (
    <div className={`input-wrapper ${props.className} }`}>
      <label htmlFor={props.name}>{ props.label }</label>
      <select 
        name="Country" 
        id="Country" 
        // className={ `${opened ? 'select-opened' : '' }`} 
        // onClick={() => setOpened(!opened)} 
      >
        <option value="poland">Poland</option>
        <option value="russia">Russia</option>
      </select>
    </div>
  )
}

export default Select;