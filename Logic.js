// JavaScript Document
const C1Path = document.getElementById("C1");
const C1SharpPath = document.getElementById("C1Sharp");
const D1Path = document.getElementById("D1");
const D1SharpPath = document.getElementById("D1Sharp");
const E1Path = document.getElementById("E1");
const F1Path = document.getElementById("F1");
const F1SharpPath = document.getElementById("F1Sharp");
const G1Path = document.getElementById("G1");
const G1SharpPath = document.getElementById("G1Sharp");
const A1Path = document.getElementById("A1");
const A1SharpPath = document.getElementById("A1Sharp");
const B1Path = document.getElementById("B1");
const C2Path = document.getElementById("C2");
const C2SharpPath = document.getElementById("C2Sharp");
const D2Path = document.getElementById("D2");
const D2SharpPath = document.getElementById("D2Sharp");
const E2Path = document.getElementById("E2");
const F2Path = document.getElementById("F2");
const F2SharpPath = document.getElementById("F2Sharp");
const G2Path = document.getElementById("G2");
const G2SharpPath = document.getElementById("G2Sharp");
const A2Path = document.getElementById("A2");
const A2SharpPath = document.getElementById("A2Sharp");
const B2Path = document.getElementById("B2");

//PIANO
const piano = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var pianoFromRoot = [];
var inKey = [];

//Scales
//1=half step 2=whole step 3=minor third
const Maj = [2,2,1,2,2,2,1]
const min = [2,1,2,2,1,2,2]
const minHarmonic = [2,1,2,2,1,3,2]
const blues = [3,2,1,1,3,2]

//Whats in Key
var C1 = false;
	var C1Sharp = false;
var D1 = false;
	var D1Sharp = false;
var E1 = false;
var F1 = false;
	var F1Sharp = false;
var G1 = false;
	var G1Sharp = false;
var A1 = false;
	var A1Sharp = false;
var B1 = false;
var C2 = false;
	var C2Sharp = false;
var D2 = false;
	var D2Sharp = false;
var E2 = false;
var F2 = false;
	var F2Sharp = false;
var G2 = false;
	var G2Sharp = false;
var A2 = false;
	var A2Sharp = false;
var B2 = false;

var note
var root

function CheckInput(){
	console.log("function called successfuly");
	var x = document.getElementById("note");
	var i = x.selectedIndex;
	note = x.options[i].text;
	console.log(note);
	if (note != "Select One"){
		CheckKey();
	}
};

function CheckKey() {
	FindTheRoot();
	SetUpTheRootPt1();
	SetUpTheRootPt2();
	listNotesFromRoot();
	
	
};

function listNotesFromRoot() {
	console.log(pianoFromRoot[0] + " " + pianoFromRoot[1] + " " + pianoFromRoot[2] + " " + pianoFromRoot[3] + " " + pianoFromRoot[4] + " " + pianoFromRoot[5] + " " + pianoFromRoot[6] + " " + pianoFromRoot[7] + " " + pianoFromRoot[8] + " " + pianoFromRoot[9] + " " + pianoFromRoot[10] + " " + pianoFromRoot[11] )
}
	
function FindTheRoot() {
	for(b = 0; b < piano.length; b++){
		if (piano[b] == note){
			
			root = b;
			console.log("Root Note " + piano[b] + " Captured");
			
		}
	}
};
	
function SetUpTheRootPt1() {
	var i = 0
	
	for(t = root; t < piano.length; t++){
		pianoFromRoot[i] = piano[t];
		console.log( pianoFromRoot[i] + " Added to PianoFromRoot");
		i++
	}
} 	

function SetUpTheRootPt2() {
	
	var i = 0;
	var b = pianoFromRoot.length;
	
	
	for(t = b; t < 12; t++){
		console.log("Success");
		pianoFromRoot[t] = piano[i];
		console.log( pianoFromRoot[i] + " Added to PianoFromRoot");
		i++;
	}
};

function Reset() {
	var C1 = false;
	var C1Sharp = false;
	var D1 = false;
	var D1Sharp = false;
	var E1 = false;
	var F1 = false;
	var F1Sharp = false;
	var G1 = false;
	var G1Sharp = false;
	var A1 = false;
	var A1Sharp = false;
	var B1 = false;
	var C2 = false;
	var C2Sharp = false;
	var D2 = false;
	var D2Sharp = false;
	var E2 = false;
	var F2 = false;
	var F2Sharp = false;
	var G2 = false;
	var G2Sharp = false;
	var A2 = false;
	var A2Sharp = false;
	var B2 = false;
};


function UpdateVisuals () {
	if(C1 == true){
	
	} else {
		
	};
	
	if(C1Sharp == true){

	} else {

	};
		
	if(D1 == true){

	} else {

	};
	
	if(D1Sharp == true){

	} else {
		
	};
		
	if(E1 == true){
		
	} else {
		
	};
		
	if(F1 == true){

	} else {
		
	};
	
	if(F1Sharp == true){

	} else {
		
	};
		
	if(G1 == true){

	} else {
		
	};
	
	if(G1Sharp == true){

	} else {
		
	};
		
	if(A1 == true){

	} else {
		
	};
	
	if(A1Sharp == true){

	} else {
		
	};
		
	if(B1 == true){

	} else {
		
	};
};