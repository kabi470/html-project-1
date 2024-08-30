// Initialize variables
let assisName = "Haris varma A I";
let bossName = "Antony samuvel and Kabilesh";

// Function to respond to user input
function respond(text) {
  if (text.includes('hi bro')) {
    return "HI Sir or Mam !";
  } else if (text.includes("who is created you")) {
    return "Antony samuvel and sam nivesh was created me";
  } else if (text.includes("who are you") || text.includes('what is your name')) {
    return `My name is ${assisName}`;
  } else if (text.includes("good morning")) {
    return `A warm ${text}\nHow are you ${bossName}?`;
  } else if (text.includes("I am fine")) {
    return "oh really good";
  } else if (text.includes("who I am")) {
    return "If you talk then definately your human.";
  } else if (text.includes('who are you')) {
    return `My name is ${assisName}! i was created by ${bossName}`;
  } else if (text.includes('where I am studying')) {
    return "you are currently studying in haris varma matric higher secondary school ";
  } else if (text.includes('who is founder of psi college')) {
    return "S. Pandian is founder of college";
  } else if (text.includes('thank you')) {
    return "It's my pleasure Sir!";
  } else if (text.includes('fine') || text.includes("good")) {
    return "It's good to know that your fine";
  } else if (text.includes('tell me a joke')) {
    return getJoke();
  } else if (text.includes('open our school site')) {
    window.open('https://www.harisvarma.com', '_blank');
    return "";
  } else if (text.includes('open psi college site')) {
    window.open('https://www.psyec.edu.in', '_blank');
    return "";
  } else if (text.includes('who is our principal')) {
    return "our principal is mrs.dr.sowmiya mam";
  } else if (text.includes('where is our school located')) {
    return "our school is located at ariyanendal paramakudi";
  } else if (text.includes('In what galaxy our solar system located?')) {
    return 'milky way';
  } else if (text.includes('who is cheif minister of tamil nadu')) {
    return "Honourable m k stalin is our chief minister";
  } else if (text.includes("your opinion about harish varma")) {
    return "Right Place for Good education";
  } else if (text.includes('play our school intro')) {
  window.open('https://youtu.be/nnEcvaHa7i4?si=QRpbz3c2tfMM6g-I', '_blank');
} else if (text.includes('play previous Guru Utsav competition')) {
  window.open('https://youtu.be/pXzcTkwaWt0?si=fYk4uReJO5y0orDo', '_blank');
} else if (text.includes('play intro video')) {
  window.open('https://youtu.be/7sBUUQNz2yE?si=idgp-IioA0RVqPFy', '_blank');
} else if (text.includes('play a song')) {
  window.open('https://youtu.be/CCJctjIO5kU?si=O-pBP5dI9Hx7Z7go', '_blank');
} else if (text.includes('play rhymes')) {
  window.open('https://youtu.be/QNYB7Tsb880?si=P-_xIT_uZuaeGae5', '_blank');
} else if (text.includes('play our opinion about event')) {
  window.open('https://youtube.com/shorts/RkQ3wGwOzm8?si=AYbT0IHA8DTUWpCQ', '_blank');
} else {
    return "I didn't understand that. Can you please rephrase?";
  }
}

// Function to get a joke
function getJoke() {
  // You can use a joke API or a local joke database here
  return "Here's a joke: ...";
}

// Log a message in the chat log
function logMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Call the respond function and log the response
function respondAndLog(text) {
  const response = respond(text);
  logMessage(`You: ${text}`);
  logMessage(`Bot: ${response}`);
}

// Get the chat log, user input, and send button elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Add an event listener to the send button
sendBtn.addEventListener('click', () => {
  const userInputText = userInput.value.trim();
  if (userInputText !== '') {
    respondAndLog(userInputText);
    userInput.value = '';
  }
});
