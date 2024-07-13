// input textbox 
const inputTextbox = document.getElementById('inputTextbox');
// hash output textbox
const hashTextbox = document.getElementById('hashTextbox');

const crypto = require('crypto');

// generate hash button event
document.getElementById('generateHash').addEventListener('click', () => {
    // get hash type selected
    const hashType = document.querySelector('#hashType').value;
    // generate hash
    const hash = crypto.createHash(hashType);
    hash.update(inputTextbox.value);
    // output hash data in hex
    hashTextbox.value = hash.digest('hex');
});

// copy hash to clipboard
document.getElementById('copyHashToClipboard').addEventListener('click', () => {
    if (navigator.clipboard && hashTextbox.value != null) {
        navigator.clipboard.writeText(hashTextbox.value).then(() => {
            alert('Hash copied to clipboard');
        }).catch((error) => {
            console.error('Failed to copy hash: ', error);
        });
        } else {
        console.error('Clipboard API not supported');
    }
});

// clear input textbox 
document.getElementById('clearInputTextbox').addEventListener('click', () => {
    inputTextbox.value = "";
});

// clear hash textbox 
document.getElementById('clearHashTextbox').addEventListener('click', () => {
    hashTextbox.value = "";
});    