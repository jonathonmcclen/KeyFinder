var pianoKeyElements;
var noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];


function getPianoKeyElements() {
    pianoKeyElements = document.querySelectorAll('.piano-key');
}


function updatePiano() {
	
	var key = document.getElementById('key-select').value;
	var scaleType = document.getElementById('scale-select').value;
    
    if (key == "Select One")
        return;
    

    var notesInScale = []
    
	
    if (scaleType == 'major') {
        var steps = [2, 2, 1, 2, 2, 2];
    }
    else if (scaleType == 'minor') {
        var steps = [2, 1, 2, 2, 1, 2];
    }
    else if (scaleType == 'minor-harmonic') {
        var steps = [2, 1, 2, 2, 1, 3];
    }
    else if (scaleType == 'blues') {
        var steps = [3, 2, 1, 1, 3, 2];
    }


    let currentIndex = noteNames.indexOf(key);
    for (let i = 0; i < steps.length; i++) {
        notesInScale.push(noteNames[currentIndex % 12]);
        currentIndex += steps[i];
    }
    notesInScale.push(noteNames[currentIndex % 12]);
    
    for (let pianoKey of pianoKeyElements) {
        if (notesInScale.includes(pianoKey.firstChild.innerHTML)) {
            if (pianoKey.className.includes(' grayed-out'))
                pianoKey.className = pianoKey.className.replace(' grayed-out', '');
        }
        else if (!pianoKey.className.includes(' grayed-out')) {
            pianoKey.className += ' grayed-out';
        }
    }
    
}


window.onload = function() {
    getPianoKeyElements();
}
