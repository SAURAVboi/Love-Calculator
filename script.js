function calculateLove() {
    var name1 = document.getElementById('name1').value.trim().toLowerCase();
    var name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    var combinedName = name1 + name2;
    var loveScore = 0;

    for (var i = 0; i < combinedName.length; i++) {
        loveScore += combinedName.charCodeAt(i);
    }

    var  percentage= loveScore % 101;

    var resultText = "Your love compatibility is " + percentage + "%!";
    document.getElementById('result').textContent = resultText;
}
