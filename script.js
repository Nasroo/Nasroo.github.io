document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = "Yay! Can't wait for our Valentine's Day! ❤️";
    document.getElementById('message').style.display = 'block';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = "hey? u miss clicked? I'll give u another chance";
    document.getElementById('message').style.display = 'block';
});
