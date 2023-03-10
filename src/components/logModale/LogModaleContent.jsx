import React from "react";

const LogModaleContent = ({ logModaleData, handleSubmit, setIsOnLogin }) => {
  return (
    <div className="logModaleContent_container">
      <form className="logModaleContent_form" onSubmit={handleSubmit}>
        {logModaleData.inputs.map((item, index) => (
          <div key={item.id + "-" + index} className="logModaleForm_field">
            <label htmlFor={item.id}>{item.label}</label>
            <input type={item.type} id={item.id} required />
          </div>
        ))}
        <div>
          <input type="submit" value={logModaleData.submit} />
        </div>
      </form>
      <p onClick={setIsOnLogin} className="logModaleContent_toggleForm">
        {logModaleData.link}
      </p>
    </div>
  );
};

export default LogModaleContent;
