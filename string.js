// number input textbox
const numberInput = document.getElementById('numberInput');
// number output textbox
const numberOutput = document.getElementById('numberOutput');
// numSysInputSelection convertNumberButton#
const numSysInputSelection = document.getElementById('numSysInputSelection');
// numSysOutputSelection
const numSysOutputSelcetion = document.getElementById('numSysOutputSelection');

// input string conversion
function convertStringData(input) {
  // Helper functions to convert number to different bases
  function toBinary(num) {
    return num.toString(2).padStart(8, '0');
  }

  function toOctal(num) {
    return num.toString(8).padStart(3, '0');
  }

  function toDecimal(num) {
    return num.toString(10);
  }

  function toHexadecimal(num) {
    return num.toString(16).toUpperCase().padStart(2, '0');
  }

  let binary = '';
  let octal = '';
  let decimal = '';
  let hexadecimal = '';

  for(let char of input) {
    let asciiCode = char.charCodeAt(0);

    binary += toBinary(asciiCode) + ' ';
    octal += toOctal(asciiCode) + ' ';
    decimal += toDecimal(asciiCode) + ' ';
    hexadecimal += toHexadecimal(asciiCode) + ' ';
  }

  return {
    binary: binary.trim(),
    octal: octal.trim(),
    decimal: decimal.trim(),
    hexadecimal: hexadecimal.trim(),
  };
}

// Get the dropdown menu element
const inputDropdownMenu = document.getElementById('numSysInputSelection');

// Add an event listener to the dropdown menu
inputDropdownMenu.addEventListener('change', function(event) {
  // Get the selected value from the dropdown menu
  const selectedValue = event.target.value;

  // Redirect to a different page based on the selected value
  switch (selectedValue) {
    case 'binary':
      window.location.href = 'binary-conversion';
      break;
    case 'octal':
      window.location.href = 'octal-conversion';
      break;
    case 'decimal':
      window.location.href = 'decimal-conversion';
      break;
    case 'hex':
        window.location.href = 'hexadecimal-conversion';
        break;  
    default:
      console.log('No option selected');
      // Perform default action
  }
});

// convert button event listener
document.getElementById('convertNumberButton').addEventListener('click', () => {
    const outputOp = document.querySelector('#numSysOutputSelection').value;

    // perform string conversion for all bases
    const result = convertStringData(numberInput.value);

    // return the chosen output number base
    switch(outputOp) {
      case 'binary': numberOutput.value = result.binary;  break;
      case 'octal': numberOutput.value = result.octal;  break;
      case 'decimal': numberOutput.value = result.decimal;  break;
      case 'hex': numberOutput.value = result.hexadecimal;  break;
      default:  numberOutput.value = "Invalid output type selected..."; break;
    }
});

// clear input textbox 
document.getElementById('clearInputTextbox').addEventListener('click', () => {
    numberInput.value = "";
});

// clear output textbox 
document.getElementById('clearOutputTextbox').addEventListener('click', () => {
    numberOutput.value = "";
});

// copy to clipboard
document.getElementById('copyOutputTextToClipboard').addEventListener('click', () => {
    if (navigator.clipboard && numberOutput.value != null) {
        navigator.clipboard.writeText(numberOutput.value).then(() => {
          console.log('Text copied to clipboard');
          alert('Text copied to clipboard');
        }).catch((error) => {
          console.error('Failed to copy text: ', error);
        });
      } else {
        console.error('Clipboard API not supported');
      }
});
