// Function to show the Valentine's message
function showValentineMessage() {
    document.getElementById('message').innerText = "Happy Valentine's Day ❤️";
    document.getElementById('message').style.display = 'block';
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
