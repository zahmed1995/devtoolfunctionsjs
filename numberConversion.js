// number input textbox
const numberInput = document.getElementById('numberInput');
// number output textbox
const numberOutput = document.getElementById('numberOutput');
// numSysInputSelection convertNumberButton#
const numSysInputSelection = document.getElementById('numSysInputSelection');
// numSysOutputSelection
const numSysOutputSelcetion = document.getElementById('numSysOutputSelection');

// input binary conversion
function convertBinaryInputNumber(input, outputOp) {
    
    // sanity check for binary input
    if(/[^01]+/.test(input)) {
        return "Please enter valid binary data for e.g. 0101010101...";
    }

    switch(outputOp)
    {
        case 'decimal': return parseInt(input, 2); break;
        case 'octal':   return parseInt(input, 2).toString(8); break;
        case 'hex': return parseInt(input, 2).toString(16); break;
        case 'ascii':  return String.fromCharCode(parseInt(input, 2)); break;
        default:
            return 'Invalid output option.';
            break;
    }
}

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

// input decimal conversion
function convertdecimalInputNumber(input, outputOp) {
    
    // sanity check for octal input
    if(/[^0-9]+/.test(input)) {
        return "Please enter valid Decimal data for e.g. 012345678901234..."
    }
    
    switch(outputOp)
    {
        case 'binary': return parseInt(input, 10).toString(2); break;
        case 'octal':  return parseInt(input, 10).toString(8); break;
        case 'hex': return parseInt(input, 10).toString(16); break;
        case 'ascii':return String.fromCharCode(parseInt(input, 10));  break;
        default:
            return 'Invalid output option.';
            break;
    }
}

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


// converting function
function covnvert(input, inputOp, outputOp)
{
    switch(inputOp)
    {
        case 'binary':  return convertBinaryInputNumber(input, outputOp); break;
        case 'octal':   return convertOctalInputNumber(input, outputOp); break;
        case 'decimal': return convertdecimalInputNumber(input, outputOp); break;
        case 'hex':     return convertHexInputNumber(input, outputOp); break;
        case 'ascii':  return convertStringInput(input, outputOp); break;
        default:
            // code should never enter this scope
            return "invalid option selected...";
            break;
    }
}

// convert button event listener
document.getElementById('convertNumberButton').addEventListener('click', () => {
    const inputOp = document.querySelector('#numSysInputSelection').value;
    const outputOp = document.querySelector('#numSysOutputSelection').value;
    numberOutput.value = covnvert(numberInput.value, inputOp, outputOp);
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
