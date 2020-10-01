var pianoKeyElements;
var originalHTML;
var noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];


function getPianoKeyElements() {
    pianoKeyElements = document.querySelectorAll('.piano-key');
    
    originalHTML = {};
    for (let elem of pianoKeyElements) {
        originalHTML[elem.id] = elem.firstChild.innerHTML;
    }
}

function addInitialGreyOut() {
    for (let elem of pianoKeyElements) {
        elem.firstChild.innerHTML += "<span class=\"circle grey-circle\"></span>";
    }
}

function updatePiano() {
	
	var key = document.getElementById('key-select').value;
	var scaleType = document.getElementById('scale-select').value;
    
    if (key == "Select One")
        return;
    

    var notesInScale = [];
    
	
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
        if (notesInScale.includes(originalHTML[pianoKey.id])) {
            pianoKey.firstChild.innerHTML = originalHTML[pianoKey.id] + "<span class=\"circle green-circle\"></span>";
            pianoKey.firstChild.className = 'label';
        }
        else {
            pianoKey.firstChild.innerHTML = ' X' + "<span class=\"circle red-circle\"></span>";
            pianoKey.firstChild.className = 'x';
        }
    }
    
    updateChordList(notesInScale, scaleType);
    
}

function updateChordList(notesInScale, scaleType) {
    let major_order = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    let minor_order = ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'];
    let minor_harmonic_order = ['min', 'dim', 'aug', 'min', 'maj', 'maj', 'dim'];
    
    if (scaleType == 'major')
        var order = major_order;
    else if (scaleType == 'minor')
        var order = minor_order;
    else if (scaleType == 'minor-harmonic')
        var order = minor_harmonic_order;
    else return;

    for (let i = 1; i < 8; i++) {
        document.getElementById('chord' + i).innerHTML = notesInScale[i - 1] + order[i - 1];
    }
    
}

function createListeners() {
    for (let piano_key of document.querySelectorAll('.piano-key')) {
        piano_key.onmousedown = function() {
            document.getElementById(piano_key.id + '-audio').play();
            if (!piano_key.className.includes('pressed-key'))
                piano_key.className += ' pressed-key';
        }
        piano_key.onmouseup = function() {
            piano_key.className = piano_key.className.replace(' pressed-key', '');
        }
    }
}


window.onload = function() {
    getPianoKeyElements();
    addInitialGreyOut();
    createListeners();
}
