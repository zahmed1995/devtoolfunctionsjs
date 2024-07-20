// rsa public key textbox
const rsaPub = document.getElementById('rsaPubTextbox');
// rsa private key textbox
const rsaPriv = document.getElementById('rsaPrivTextbox');
// rsa key pair length variable
let rsaKeyLength = 1024;

const crypto = require('crypto');

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// export key 
async function exportRsaKeyPair(key, type) {
  // be default select 'pksc8' as private key format
  let format = 'pkcs8';

  // if type is 'public' then select 'spki' as public key format
  if(type == 'PUBLIC KEY') {
    format = 'spki';
  }

  const exported = await window.crypto.subtle.exportKey(format, key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN ${type}-----\n${exportedAsBase64}\n-----END ${type}-----\n`;

  if(type == 'PRIVATE KEY') {
    rsaPriv.value = pemExported;
  } else {
    if(type == 'PUBLIC KEY') {
      rsaPub.value = pemExported;
    }
  }
}

// // generate rsa key pair event listener
document.getElementById('generateRsaKeyPair').addEventListener('click', generateRsaKeyPair);

async function generateRsaKeyPair() {
  // generate key
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: rsaKeyLength, // in bits
      publicExponent: new Uint8Array([1, 0, 1]), // or
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  ); 

  // export key
  exportRsaKeyPair(keyPair.privateKey, 'PRIVATE KEY');
  exportRsaKeyPair(keyPair.publicKey, 'PUBLIC KEY');
};

// rsa key pair length value drop down change event listener
document.querySelector('#rsaKeyLength').addEventListener('change', () => {
    // Get the selected value from the dropdown menu
    const selectedValue = event.target.value;

    switch(selectedValue) {
      case '4096': rsaKeyLength = 4096; break;
      case '3072': rsaKeyLength = 3072; break;
      case '2048': rsaKeyLength = 2048; break;
      case '1024':
      default:     rsaKeyLength = 1024; break;  
    }
});

// copy private key to clipboard
document.getElementById('copyPrivKeyToClipboard').addEventListener('click', () => {
if (navigator.clipboard && numberOutput.value != null) {
    navigator.clipboard.writeText(numberOutput.value).then(() => {
        console.log('Private key copied to clipboard');
        alert('Private key copied to clipboard');
    }).catch((error) => {
        console.error('Failed to copy private key: ', error);
    });
    } else {
    console.error('Clipboard API not supported');
    }
});

// copy public key to clipboard
document.getElementById('copyPubKeyToClipboard').addEventListener('click', () => {
    if (navigator.clipboard && numberOutput.value != null) {
        navigator.clipboard.writeText(numberOutput.value).then(() => {
          console.log('Public key copied to clipboard');
          alert('Public key copied to clipboard');
        }).catch((error) => {
          console.error('Failed to copy public key: ', error);
        });
      } else {
        console.error('Clipboard API not supported');
      }
});

// clear private key textbox 
document.getElementById('clearPrivKeyTextbox').addEventListener('click', () => {
    rsaPriv.value = "";
});

// clear public key textbox 
document.getElementById('clearPubKeyTextbox').addEventListener('click', () => {
    rsaPub.value = "";
});