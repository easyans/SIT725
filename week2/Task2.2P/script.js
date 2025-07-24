const welcomeMsg = document.getElementById('welcome-msg');
const thanksMsg = document.getElementById('thanks-msg');

// This Shows us a small welcome on load, ends with a thank you message at the end.
welcomeMsg.style.display = '';
thanksMsg.style.display = 'none';

document.getElementById('calcForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const resDiv = document.getElementById('result');
  try {
    const res = await fetch(`/add?num1=${num1}&num2=${num2}`);
    const data = await res.json();
    if (data.result !== undefined) {
      resDiv.textContent = `Result: ${data.result}`;
      welcomeMsg.style.display = 'none';
      thanksMsg.style.display = '';
    } else {
      resDiv.textContent = 'Error: ' + (data.error || 'Unknown error');
      welcomeMsg.style.display = '';
      thanksMsg.style.display = 'none';
    }
  } catch {
    resDiv.textContent = 'Error: Could not connect to server.';
    welcomeMsg.style.display = '';
    thanksMsg.style.display = 'none';
  }
});
