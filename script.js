// Function to fetch message from JSON file
function fetchMessage() {
    fetch('message.json')
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            document.getElementById('message').innerText = data.message;
            document.getElementById('message').style.display = 'block';
        })
        .catch(error => console.error('Error fetching message:', error));
}

// Add event listener to the original Yes button
document.getElementById('yesBtn').addEventListener('click', fetchMessage);

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
    document.getElementById('yesBtn2').addEventListener('click', fetchMessage);
});
