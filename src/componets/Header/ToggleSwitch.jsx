import React, { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch({ id = "mode" }) {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn(!on);
    document.body.style.backgroundColor = !on ? '#ffffff' : '#060C1A';
  };



  

  return (
    <div className="toggle-switch">
      <input
        id={id}
        name={id}
        className="darkmode-toggle"
        type="checkbox"
        onChange={handleToggle}
      />

      <label className="label" htmlFor={id}>
        <svg
          version="1.1"
          className="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 496"
        >
          <path d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392 c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z" />
        </svg>

        <svg
          version="1.1"
          className="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.739 49.739"
        >
          <path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
            c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
            c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
            C32.639,48.039,28.825,48.888,25.068,48.889z"/>
        </svg>
      </label>
    </div>
  );
}

export default ToggleSwitch;
