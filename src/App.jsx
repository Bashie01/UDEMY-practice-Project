import Header from "./components/header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 2,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    // the argument order here matters, the first argument is the key of the object that we want to update, the second argument is the new value that we want to update the key with
    // this function is used when a user starts typing in an input field, it keeps the currently stored values and updates the new value that the user is typing in the input field

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, // ...prevUserInput: This part says, "Keep everything that's already in the box.
        [inputIdentifier]: +newValue, // This part says, "But now, change the specific field (inputIdentifier) to the new value (newValue). adding a + sign in front of newValue converts the string to a number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* this prop is used in the UserInput component to pass the handleChange function to the UserInput component */}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
