var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

var currentVotes = document.getElementById('current-votes');
var userVote = document.getElementById('user-vote');

socket.on('voteCount', function (votes) {
  currentVotes.innerText = "A: " + votes["A"] + ", B: " + votes["B"] + ", C: " + votes["C"] + ", D: " + votes["D"];
});

socket.on('userVote', function(message) {
  userVote.innerText = "Your vote is: " + message;
});
