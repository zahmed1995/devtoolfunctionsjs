// number input textbox
const numberInput = document.getElementById('numberInput');
// number output textbox
const numberOutput = document.getElementById('numberOutput');
// numSysInputSelection convertNumberButton#
const numSysInputSelection = document.getElementById('numSysInputSelection');
// numSysOutputSelection
const numSysOutputSelcetion = document.getElementById('numSysOutputSelection');

// input string conversion
function convertStringInput(input, outputOp) {
    switch(outputOp)
    {
        case 'decimal': return input.charCodeAt(0); break;
        case 'octal':  return input.charCodeAt(0).toString(8); break;
        case 'hex': return input.charCodeAt(0).toString(16); break;
        case 'binary': return input.charCodeAt(0).toString(2); break;
        default:
            return 'Invalid output option.';
            break;
    }
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
    numberOutput.value = convertStringInput(numberInput.value, outputOp);
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
