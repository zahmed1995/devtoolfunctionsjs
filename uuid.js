// uuid output textbox
const uuid = document.getElementById('uuidOutput');

// generate uuid function
function generateUUID() {
    return 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

// generate uuid event
document.getElementById('generateUUIDButton').addEventListener('click', () => {
    uuid.value = generateUUID();
});

// clear uuid output textbox
document.getElementById('clearUUIDTextbox').addEventListener('click', () => {
    uuid.value = "";
});

// copy uuid to clipboard
document.getElementById('copyUUIDToClipboard').addEventListener('click', () => {
    if (navigator.clipboard && uuid.value != null) {
        navigator.clipboard.writeText(uuid.value).then(() => {
            console.log('UUID copied to clipboard');
            alert('UUID copied to clipboard');
        }).catch((error) => {
            console.error('Failed to copy UUID: ', error);
        });
        } else {
        console.error('Clipboard API not supported');
    }
});