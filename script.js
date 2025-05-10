
function selectWinner() {
  const input = document.getElementById('fileInput');
  const count = parseInt(document.getElementById('winnerCount').value);
  if (!input.files.length) return alert('Lütfen bir dosya yükleyin.');
  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.split('\n').map(x => x.trim()).filter(x => x);
    const shuffled = lines.sort(() => 0.5 - Math.random());
    const winners = shuffled.slice(0, count);
    document.getElementById('winner').innerText = 'Kazananlar: ' + winners.join(', ');
  };
  reader.readAsText(input.files[0]);
}

function convertComments() {
  const raw = document.getElementById('rawComments').value;
  const users = raw.split('\n').map(line => line.split(':')[0].trim()).filter(x => x);
  document.getElementById('converted-users').innerText = users.join('\n');
}

function fetchCommentsFromUrl() {
  alert("Bu özellik sunucu kurulumu gerektirir. Şimdilik devre dışı.");
}
