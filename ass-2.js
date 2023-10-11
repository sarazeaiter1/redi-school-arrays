// Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.
// Example:
// John, 18, English → "Hello! my name is John, I am 18 years old and I speak English."

function introducePerson(name, age, language) {
  let error = "";

  if (name === undefined) {
    error += "Name ";
  }
  if (age === undefined) {
    error += ", Age ";
  }
  if (language === undefined) {
    error += ", Language";
  } else {
    console.log(
      "Hello! my name is " +
        name +
        " I am " +
        age +
        " years old and I speak " +
        language
    );
  }
  if (error !== "") {
    console.log(error + " aren't defined");
  }
}

const name = "Mohammad";
const age = 25;
const language = "Deutsch";

introducePerson(name, age, language);

const user = ["Mohammad", 25, "Deutsch"];
