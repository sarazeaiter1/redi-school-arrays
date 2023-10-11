// user will be an array
function introducePerson(user) {
  let error = "";

  if (user[0] === undefined) {
    error += "Name ";
  }
  if (user[1] === undefined) {
    error += ", Age ";
  }
  if (user[2] === undefined) {
    error += ", Language";
  } else {
    console.log(
      "Hello! my name is " +
        user[0] +
        " I am " +
        user[1] +
        " years old and I speak " +
        user[2]
    );
  }
  if (error !== "") {
    console.log(error + " aren't defined");
  }
}

// user: [name,age,language]
const user = ["Mohammad", 25, "Deutsch"];
introducePerson(user);
