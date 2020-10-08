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
    

    var notesInScale = getNotesInScale(key, scaleType);
    
    
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

function getNotesInScale(key, scaleType) {
    
    let notesInScale = [];
    
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
    
    return notesInScale;
    
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
            let audio = document.getElementById(piano_key.id + '-audio');
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }
            document.getElementById(piano_key.id + '-audio').play();
            if (!piano_key.className.includes('pressed-key'))
                piano_key.className += ' pressed-key';
        }
    }
    
    document.onmouseup = function() {
        for (let pressed_key of document.querySelectorAll('.pressed-key'))
            pressed_key.className = pressed_key.className.replace(' pressed-key', '');
    }
    
    document.getElementById('play-scale-button').onclick = function(e) {
        e.preventDefault();
        
        var key = document.getElementById('key-select').value;
        var scaleType = document.getElementById('scale-select').value;
        var notesInScale = getNotesInScale(key, scaleType);
        playScale(notesInScale, scaleType, 1000);
        
    }
    
    for (let chord_div of document.querySelectorAll('.chord-div')) {
        chord_div.onclick = function() {
            playChord(chord_div.children[1].textContent)
        }
    }
}


function playNote(noteID, ms) {
    document.getElementById(noteID).onmousedown();
    setTimeout(document.onmouseup, ms);
}

function playChord(chordID, chordNum=1, ms=1000) {
    
    let chords = {
        maj: [4,3],
        min: [3,4],
        maj7: [4,3,4],
        dim: [3,3],
        aug: [4,4],
    }
    
    if (chordID[1] == '#')  {
        var note = chordID.substr(0, 2);
        var chordType = chordID.substr(2);
    }
    else {
        var note = chordID[0];
        var chordType = chordID.substr(1);
    }
    
    let notesInChord = [];
    let chord = chords[chordType];
    
    let currentIndex = noteNames.indexOf(note);
    for (let i = 0; i < chord.length; i++) {
        notesInChord.push(noteNames[currentIndex % 12]);
        currentIndex += chord[i];
    }
    notesInChord.push(noteNames[currentIndex % 12]);
    
    
    for (let i = 0; i < notesInChord.length; i++) {
        
        notesInChord[i] = notesInChord[i][0] + chordNum + notesInChord[i].substr(1).replace('#', 'Sharp')
        
        if (notesInChord[i] == 'B1') 
            chordNum = '2';
        else if (notesInChord[i] == 'C1' && i != 0) {
            notesInChord[i] = 'C2';
            chordNum = '2';
        }
    }
    
    for (let note of notesInChord) {
        playNote(note, ms);
    }
    
}

function playScale(notesInScale, scaleType, ms) {
    
    let num_append = '1';
    for (let i = 0; i < notesInScale.length; i++) {
        
        notesInScale[i] = notesInScale[i][0] + num_append + notesInScale[i].substr(1).replace('#', 'Sharp')
        
        if (notesInScale[i] == 'B1') 
            num_append = '2';
        else if (notesInScale[i] == 'C1' && i != 0) {
            notesInScale[i] = 'C2';
            num_append = '2';
        }
    }
    
    if (scaleType != 'blues')
        notesInScale.push(notesInScale[0].replace('1', '2'));
    
    for (let i = 0; i < notesInScale.length; i++) {
        setTimeout(() => playNote(notesInScale[i], ms), ms * i + 50 * i);
    }
    
}


window.onload = function() {
    getPianoKeyElements();
    addInitialGreyOut();
    createListeners();
}
