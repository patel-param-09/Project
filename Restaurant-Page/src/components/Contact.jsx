import React, { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    email: "",
    inquiries: "",
  });
  function handleInput(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleClick(e) {
    e.preventDefault();
    if (values == "") {
      alert("Please Fill All The Fields In Contact Form");
    }
  }
  return (
    <div className="flex flex-col gap-2 items-center border-white border-2 p-4">
      <h1 className="underline font-medium">Contact Form</h1>
      <form onSubmit={handleClick}>
        <div className="flex flex-col mb-4">
          <label>Email :- </label>
          <input
            type="email"
            name="email"
            className="rounded-md h-8"
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Inquiries :- </label>
          <input
            type="text"
            name="inquiries"
            className="rounded-md h-8"
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 mt-4 ml-16 rounded-md p-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
