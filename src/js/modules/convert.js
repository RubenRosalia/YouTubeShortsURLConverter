// Define the convert function
export function convert() {
  // Select the textArea
  let textArea = document.querySelector('#convertField');

  // Get the value of the textArea
  let text = textArea.value;

  // Replace 'shorts/' with 'watch?v='
  text = text.replace(/shorts\//g, 'watch?v=');
  
  // Display results in div
  let convertField_output = document.getElementById("convertField-results");

  // Clear previous results
  convertField_output.innerHTML = "";

  // Replace newline characters with HTML entity &#013 (br doesnt work).
  text = text.replace(/\n/g, '&#013;');

  // Set the text content of the output element
  convertField_output.innerHTML = text;
}

// Define the copy function
export function copy() {
  // Select the textarea containing the results
  let convertField_output = document.getElementById("convertField-results");

  // Get the text content from the textarea
  let textToCopy = convertField_output.value;

  // Use the Clipboard API to write the text to the clipboard
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Show a success message or perform any other action on successful copy
      console.log('Text copied to clipboard successfully');
    })
}

// Set up the event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

  // Convertfield button.
  const button = document.getElementById('convertField-button');

  // Convertfield Clipboard button.
  const copyButton = document.getElementById('convertField-copy');

  // EventListener convert
  button.addEventListener('click', convert);

  // EventListener copy
  copyButton.addEventListener('click', copy);
});
