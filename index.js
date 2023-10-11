// The function should accept the number of normal days and number of extra days as parameters!
function calculateBonus(numNormalDays, numExtraDays) {
  // check !!
  if (numNormalDays === undefined || numExtraDays === undefined) {
    console.log("Error, please provide params");
  } else {
    let normalBonus = 1;
    let extraBonus = 3;
    let bonus = normalBonus * numNormalDays + extraBonus * numExtraDays;

    console.log("Total Bonus: " + bonus);

    let gift;
    if (bonus > 250) {
      gift = "Pay raise";
    } else if (bonus < 100) {
      gift = "Nothing";
    } else {
      gift = "Chocolate Box";
    }
    console.log("Employee gets " + gift);
  }
}

// defining the variables to send as params for the function
let numNormalDays = 200;
let numExtraDays = 20;

// calling the function
calculateBonus(numNormalDays, 0);
