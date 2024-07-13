// rsa public key textbox
const rsaPub = document.getElementById('rsaPubTextbox');
// rsa private key textbox
const rsaPriv = document.getElementById('rsaPrivTextbox');

const crypto = require('crypto');

// generate rsa key pair event listener
document.getElementById('generateRsaKeyPair').addEventListener('click', () => {
  // get key length  
  const rsaKeyLength = document.querySelector('#rsaKeyLength').value;
  // generate rsa key pair
  crypto.generateKeyPair('rsa', {
    modulusLength: rsaKeyLength,
    publicKeyEncoding: {
      type: 'pki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'y-secret-passphrase'
    }
  }, (err, publicKey, privateKey) => {
    if (err) {
      console.error(err);
    } else {
      rsaPub.value = publicKey
      rsaPriv.value = privateKey;
    }
  });

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