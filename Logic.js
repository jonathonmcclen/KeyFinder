var pianoKeyElements;
var originalHTML;
var noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var keyNames = ['C1', 'C1Sharp', 'D1', 'D1Sharp', 'E1', 'F1', 'F1Sharp', 'G1', 'G1Sharp', 'A1', 'A1Sharp', 'B1', 'C2', 'C2Sharp', 'D2', 'D2Sharp', 'E2', 'F2', 'F2Sharp', 'G2', 'G2Sharp', 'A2', 'A2Sharp', 'B2']


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
    
    
    let keysInChord = [];
    
    let current_key_index = keyNames.indexOf(notesInChord[0][0] + '1' + notesInChord[0].replace('#', 'Sharp').substr(1));
    keysInChord.push(keyNames[current_key_index]);
    
    for (let i = 1; i < notesInChord.length; i++) {
        let note = notesInChord[i]
        for (let j = current_key_index + 1; j < keyNames.length; j++) {
            let key = keyNames[j];
            if (key[0] == note[0] && (note.length == 1 || key[2] == 'S')) { //match note name to key name
                keysInChord.push(key);
                current_key_index = j;
                break;
            }
        }
    }
    
    for (let key of keysInChord) {
        playNote(key, ms);
    }
    
}

function playScale(notesInScale, scaleType, ms) {
    
    let keysInScale = [];
    
    let current_key_index = keyNames.indexOf(notesInScale[0][0] + '1' + notesInScale[0].replace('#', 'Sharp').substr(1));
    keysInScale.push(keyNames[current_key_index]);
    
    for (let i = 1; i < notesInScale.length; i++) {
        let note = notesInScale[i]
        for (let j = current_key_index + 1; j < keyNames.length; j++) {
            let key = keyNames[j];
            if (key[0] == note[0] && (note.length == 1 || key[2] == 'S')) { //match note name to key name
                keysInScale.push(key);
                current_key_index = j;
                break;
            }
        }
    }
    
    if (scaleType != "blues")
        keysInScale.push(keysInScale[0].replace('1', '2'));
    
    for (let i = 0; i < keysInScale.length; i++) {
        setTimeout(() => playNote(keysInScale[i], ms), ms * i + 50 * i);
    }
    
}


window.onload = function() {
    getPianoKeyElements();
    addInitialGreyOut();
    createListeners();
}
