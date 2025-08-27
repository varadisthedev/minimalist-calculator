let currentDisplay = "0"; // The current display content
let resultDisplay = false; // Flag 


// Function to append a value to the current display
function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    // concatenate the new value to the current display
    currentDisplay += value;
  }
  resultDisplay = false;
  updateDisplay();
}

//to update the calculator display with the current content
function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    const result=eval(currentDisplay);
    // Append the result to the current display, preceded by an equal sign (=)
    currentDisplay += "\n=" + result.toString();
    updateDisplay();

  } catch(error){
    currentDisplay += "\nError";
    updateDisplay();
  }
  resultDisplay = true;
}


function clearLastElement() {
  // Remove the last character from the current display using the slice() method
  currentDisplay = currentDisplay.slice(0, -1);

  if (currentDisplay === "") {
    currentDisplay = "0";
  }

  updateDisplay();
}


function clearDisplay() {
  currentDisplay = "0"; 
  resultDisplay = false; // Reset the result display flag to false

  updateDisplay();
}


function calculatePercentOF(){
  
  try{
    result=X/100*Y;
    
    updateDisplay();

  }
  catch(error){

  }
}