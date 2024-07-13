// number input textbox
const numberInput = document.getElementById('numberInput');
// number output textbox
const numberOutput = document.getElementById('numberOutput');
// numSysInputSelection convertNumberButton#
const numSysInputSelection = document.getElementById('numSysInputSelection');
// numSysOutputSelection
const numSysOutputSelcetion = document.getElementById('numSysOutputSelection');

// input hex conversion
function convertHexInputNumber(input, outputOp) {
    
    // sanity check for octal input
    if(/[^0-9a-fA-F]+/.test(input)) {
        return "Please enter valid Hexadecimal data for e.g. 0f34e7b1da09..."
    }
    
    switch(outputOp)
    {
        case 'decimal': return parseInt(input, 16).toString(10); break;
        case 'octal':   return parseInt(input, 16).toString(8); break;
        case 'binary': return parseInt(input, 16).toString(2); break;
        //case 'ascii':  return input.split('').map(el => el.charCodeAt().toString(16)).join(''); break;
        case 'ascii':
            let result = '';
            for(let i = 0; i < input.length; i+=2) {
                result += String.fromCharCode(parseInt(input.substr(i, 2), 16));
            }    
            return result;
            break;
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
    case 'ascii':
        window.location.href = 'string-conversion';
        break;  
    default:
      console.log('No option selected');
      // Perform default action
  }
});

// convert button event listener
document.getElementById('convertNumberButton').addEventListener('click', () => {
    const outputOp = document.querySelector('#numSysOutputSelection').value;
    numberOutput.value = convertHexInputNumber(numberInput.value, outputOp);
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
