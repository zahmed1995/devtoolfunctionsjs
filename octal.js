// number input textbox
const numberInput = document.getElementById('numberInput');
// number output textbox
const numberOutput = document.getElementById('numberOutput');
// numSysInputSelection convertNumberButton#
const numSysInputSelection = document.getElementById('numSysInputSelection');
// numSysOutputSelection
const numSysOutputSelcetion = document.getElementById('numSysOutputSelection');

// input octal conversion
function convertOctalInputNumber(input, outputOp) {
    
    // sanity check for octal input
    if(/[^0-7]+/.test(input)) {
        return "Please enter valid Octal data for e.g. 0123456701234567..."
    }

    switch(outputOp)
    {
        case 'decimal': return parseInt(input, 8).toString(10); break;
        case 'binary':  return parseInt(input, 8).toString(2); break;
        case 'hex': return parseInt(input, 8).toString(16); break;
        case 'ascii': return String.fromCharCode(parseInt(input, 8)); break;
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
    case 'decimal':
      window.location.href = 'decimal-conversion';
      break;
    case 'hex':
      window.location.href = 'hexadecimal-conversion';
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
    numberOutput.value = convertOctalInputNumber(numberInput.value, outputOp);
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
