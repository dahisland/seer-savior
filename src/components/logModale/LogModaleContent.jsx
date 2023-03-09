import React from "react";

const LogModaleContent = ({ logModaleData, handleSubmit, setIsOnLogin }) => {
  return (
    <div>
      <form className="logModaleContent_form" onSubmit={handleSubmit}>
        {logModaleData.inputs.map((item, index) => (
          <div key={item.id + "-" + index}>
            <label htmlFor={item.id}>{item.label}</label>
            <input type={item.type} id={item.id} required />
          </div>
        ))}
        <div>
          <input type="submit" value={logModaleData.submit} />
        </div>
      </form>
      <p onClick={setIsOnLogin}>{logModaleData.link}</p>
    </div>
  );
};

export default LogModaleContent;
