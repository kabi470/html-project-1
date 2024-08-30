const inputField = document.getElementById('input-field');
const submitBtn = document.getElementById('submit-btn');
const micBtn = document.getElementById('mic-btn');
const outputField = document.getElementById('output-field');

micBtn.addEventListener('click', () => {
  // Initialize speech recognition
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.maxResults = 10;

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    inputField.value = transcript;
    submitBtn.click();
  };

  recognition.start();
});

submitBtn.addEventListener('click', () => {
  const userInput = inputField.value;
  // Send user input to Python API
  fetch('/api/process_input', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: userInput }),
  })
  .then(response => response.json())
  .then(data => {
    outputField.innerText = data.output;
  })
  .catch(error => console.error(error));
});
