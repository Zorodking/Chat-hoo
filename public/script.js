const socket = io();
let username = '';
const adminPassword = 'admin123'; // Change this password as needed
let isAdmin = false;

const users = {}; // In-memory storage for users

document.getElementById('signup').addEventListener('click', () => {
    const signupUsername = document.getElementById('signup-username').value;
    const signupPassword = document.getElementById('signup-password').value;
    
    if (signupUsername && signupPassword) {
        users[signupUsername] = signupPassword;
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    }
});

document.getElementById('login').addEventListener('click', () => {
    username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (users[username] && users[username] === password) {
        if (password === adminPassword) {
            isAdmin = true;
            document.getElementById('admin-controls').style.display = 'block';
        }
        
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('send').addEventListener('click', sendMessage);
document.getElementById('message').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('kick-all').addEventListener('click', () => {
    if (isAdmin) {
        socket.emit('kickAllUsers');
    }
});

function sendMessage() {
    const msg = document.getElementById('message').value;
    if (msg) {
        socket.emit('message', { username, msg });
        document.getElementById('message').value = '';
    }
}

socket.on('message', (data) => {
    const output = document.getElementById('output');
    const messageElem = document.createElement('p');
    messageElem.innerHTML = `<strong>${data.username}:</strong> ${data.msg}`;
    output.appendChild(messageElem);
    output.scrollTop = output.scrollHeight;
});

socket.on('kickAllUsers', () => {
    if (!isAdmin) {
        alert('You have been kicked by the admin');
        window.location.reload();
    }
});
