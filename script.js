//your JS code here. If required.
const btn = document.getElementById('btn');
    const output = document.getElementById('output');

    async function displayTextWithDelay() {
      const text = document.getElementById('text').value;
      const delay = document.getElementById('delay').value;

      // Validate input
      if (!text || !delay) {
        output.textContent = 'Please provide both text and delay values.';
        return;
      }

      output.textContent = 'Waiting for the delay...';

      // Convert delay to a number
      const delayMilliseconds = Number(delay);

      // Wait for the specified delay
      await new Promise(resolve => setTimeout(resolve, delayMilliseconds));

      // Display the text after the delay
      output.textContent = text;
    }