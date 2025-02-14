// Function to fetch text from a file and display it
function showValentineMessage() {
    fetch('message.txt') // Fetch the content of the message.txt file
        .then(response => response.text())
        .then(text => {
            document.getElementById('message').innerText = text; // Display the text
            document.getElementById('message').style.display = 'block';
        })
        .catch(error => console.error('Error fetching the message:', error));
}

// Add event listener to the original Yes button
document.getElementById('yesBtn').addEventListener('click', showValentineMessage);

// Handle No button click
document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

// Handle Okay button click (convert No to Yes)
document.getElementById('okBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';

    let noBtn = document.getElementById('noBtn');
    noBtn.innerText = "Yes";  // Change text to Yes
    noBtn.id = "yesBtn2";  // Change the ID to avoid conflicts

    // Remove previous event listener (No button function)
    noBtn.replaceWith(noBtn.cloneNode(true));
    document.getElementById('yesBtn2').addEventListener('click', showValentineMessage);
});
