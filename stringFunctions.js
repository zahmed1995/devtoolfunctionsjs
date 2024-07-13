// input textbox
const inputText = document.getElementById('stringInput');
// output textbox
const outputText = document.getElementById('stringOutput');
// replace char textbox
const replaceChar = document.getElementById('replaceChar');
// replace char with textbox
const replaceCharWith = document.getElementById('replaceCharWith');
// replace string textbox
const replaceString = document.getElementById('replaceString');
// replace string with textbox
const replaceStringWith = document.getElementById('replaceStringWith');

// output textbox to be read only
outputText.ariaReadOnly = true;

// output textbox stats function 
function outputTextStats(str) {
    const text = str;
    const charCount = text.length;
    const wordCount = text.split(/\s+/).length;
    const spaceCount = text.split(' ').length - 1;
    
    if(charCount != null) {
        document.getElementById('totalCharsOutput').textContent = `Chars: ${charCount}`;
    }

    if(wordCount != null) {
        document.getElementById('totalWordsOutput').textContent = `Words: ${wordCount}`;
    }

    if(spaceCount != null) {
        document.getElementById('totalSpacesOutput').textContent = `Spaces: ${spaceCount}`;
    }
};

// upper case button event listener
document.getElementById('upperCaseButton').addEventListener('click', () => {
    outputText.value = inputText.value.toUpperCase();
    outputTextStats(outputText.value);
});

// lower case button event listener
document.getElementById('lowerCaseButton').addEventListener('click', () => {
    outputText.value = inputText.value.toLowerCase();
    outputTextStats(outputText.value);
});

// title case button event listener
document.getElementById('titleCaseButton').addEventListener('click', () => {
    const words = inputText.value.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    outputText.value = words.join(' ');
    outputTextStats(outputText.value);
});

// sentence case button event listener
document.getElementById('sentenceCaseButton').addEventListener('click', () => {
    // Convert the input string to sentence case
    const words = inputText.value.split('. ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    outputText.value = words.join('. ');
    outputTextStats(outputText.value);
});

// camel case button event listener
document.getElementById('camelCaseButton').addEventListener('click', () => {
    const tempBuff = inputText.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/g, '').toLowerCase();
    const words = tempBuff.split(' ');
    for(let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    outputText.value = words.join('');
    outputTextStats(outputText.value);
});

// snake case button event listener
document.getElementById('snakeCaseButton').addEventListener('click', () => {
    const tempBuff = inputText.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/g, '').toLowerCase();
    outputText.value = tempBuff.replace(/ /g, "_");   
    outputTextStats(outputText.value);
});

// pascal case button event listener
document.getElementById('pascalCaseButton').addEventListener('click', () => {
    const tempBuff = inputText.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/g, '').toLowerCase();
    const words = tempBuff.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    outputText.value = words.join('');
    outputTextStats(outputText.value);
});

// kebab case button event listener
document.getElementById('kebabCaseButton').addEventListener('click', () => {
    const tempBuff = inputText.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/g, '').toLowerCase();
    outputText.value = tempBuff.replace(/ /g, "-");    
    outputTextStats(outputText.value);
});

// train case button event listener
document.getElementById('trainCaseButton').addEventListener('click', () => {
    const tempBuff = inputText.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/g, '').toLowerCase();
    const words = tempBuff.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    outputText.value = words.join('-');    
    outputTextStats(outputText.value);
});

// toggle case button event listener
document.getElementById('toggleCaseButton').addEventListener('click', () => {
    outputText.value = inputText.value.replace(/([a-z])|([A-Z])/g, (match, charLower, charUpper) => {
        if (charLower) {
          return charLower.toUpperCase();
        } else if (charUpper) {
          return charUpper.toLowerCase();
        }
        return match;
      });
      outputTextStats(outputText.value);
});

// replace character
document.getElementById('replaceCharButton').addEventListener('click', () => {

    if(replaceChar.value == null || replaceCharWith.value == null) {
        outputText.value = inputText.value;
    }
    else {
        outputText.value = inputText.value.replace(new RegExp(replaceChar.value, "g"), replaceCharWith.value);
    }
    outputTextStats(outputText.value);
});

// replace string
document.getElementById('replaceStringButton').addEventListener('click', () => {

    if(replaceString.value == null || replaceStringWith.value == null) {
        outputText.value = inputText.value;
    }
    else {
        outputText.value = inputText.value.replace(new RegExp(replaceString.value, "g"), replaceStringWith.value);
    }
    outputTextStats(outputText.value);
});

// base64 encoding
document.getElementById('base64EncodeButton').addEventListener('click', () => {
    outputText.value = btoa(inputText.value);
    outputTextStats(outputText.value);
});

// base64 decoding
document.getElementById('base64DecodeButton').addEventListener('click', () => {
    outputText.value = atob(inputText.value);
    outputTextStats(outputText.value);
});

// encode url
document.getElementById('urlEncodeButton').addEventListener('click', () => {
    outputText.value = encodeURIComponent(inputText.value);
    outputTextStats(outputText.value);
});

// decode url
document.getElementById('urlDecodeButton').addEventListener('click', () => {
    outputText.value = decodeURIComponent(inputText.value);
    outputTextStats(outputText.value);
});

// event listener for input textbox
document.getElementById('stringInput').addEventListener("input", (event) => {
    const text = event.target.value;
    const charCount = text.length;
    const wordCount = text.split(/\s+/).length;
    const spaceCount = text.split(' ').length - 1;
    
    if(charCount != null) {
        document.getElementById('totalCharsInput').textContent = `Chars: ${charCount}`;
    }

    if(wordCount != null) {
        document.getElementById('totalWordsInput').textContent = `Words: ${wordCount}`;
    }

    if(spaceCount != null) {
        document.getElementById('totalSpacesInput').textContent = `Spaces: ${spaceCount}`;
    }
});

// event listener for output textbox
document.getElementById('stringOutput').addEventListener("input", (event) => {
    const text = event.target.value;
    const charCount = text.length;
    const wordCount = text.split(/\s+/).length;
    const spaceCount = text.split(' ').length - 1;
    
    if(charCount != null) {
        document.getElementById('totalCharsOutput').textContent = `Chars: ${charCount}`;
    }

    if(wordCount != null) {
        document.getElementById('totalWordsOutput').textContent = `Words: ${wordCount}`;
    }

    if(spaceCount != null) {
        document.getElementById('totalSpacesOutput').textContent = `Spaces: ${spaceCount}`;
    }
});

// clear input textbox 
document.getElementById('clearInputTextbox').addEventListener('click', () => {
    inputText.value = "";
    // clear input textbox stats
    document.getElementById('totalCharsInput').textContent = `Chars:0`;
    document.getElementById('totalWordsInput').textContent = `Words:0`;
    document.getElementById('totalSpacesInput').textContent = `Spaces:0`;
});

// clear output textbox
document.getElementById('clearOutputTextbox').addEventListener('click', () => {
    outputText.value = "";
    // clear output textbox stats
    document.getElementById('totalCharsOutput').textContent = `Chars:0`;
    document.getElementById('totalWordsOutput').textContent = `Words:0`;
    document.getElementById('totalSpacesOutput').textContent = `Spaces:0`;
});

// copy to clipboard
document.getElementById('copyOutputTextToClipboard').addEventListener('click', () => {
    if (navigator.clipboard && outputText.value != null) {
        navigator.clipboard.writeText(outputText.value).then(() => {
          console.log('Text copied to clipboard');
          alert('Text copied to clipboard');
        }).catch((error) => {
          console.error('Failed to copy text: ', error);
        });
      } else {
        console.error('Clipboard API not supported');
      }
});