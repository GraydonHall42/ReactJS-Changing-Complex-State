import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function handleChange() {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const { value: newValue, name: inputName } = event.target;
    //CAUTION: Can't access event wtihin the setFullName function

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
