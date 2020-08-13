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

var Key;


function CheckKey () {
	
	var e = document.getElementById('Note1');
	var note = e.options[e.selectedIndex].text;
	var f = document.getElementById('Note2');
	var type = f.options[f.selectedIndex].text;
	var g = document.getElementById('Scale');
	var scale = g.options[g.selectedIndex].text;
	
	Key = note + type;
	console.log(Key)
	
	if(Key == "CMajor"){
		CMaj();
		Update();
	} else if(Key == "DMajor"){
	    DMaj();
		Update();
	} else if(Key == "EMaj"){
	    EMaj();
		Update();
	} else if(Key == "FMaj"){
	    FMaj();
		Update();
	} else if(Key == "GMaj"){
	    GMaj();
		Update();
	} else if(Key == "AMaj"){
	    AMaj();
		Update();
	} else if(Key == "BMaj"){
	    BMaj();
		Update();
	}
};

function Update () {
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

function CMaj(){
	var C1 = true;
		var C1Sharp = false;
	var D1 = true;
		var D1Sharp = false;
	var E1 = true;
	var F1 = true;
		var F1Sharp = false;
	var G1 = true;
		var G1Sharp = false;
	var A1 = true;
		var A1Sharp = false;
	var B1 = true;
	var C2 = true;
		var C2Sharp = false;
	var D2 = true;
		var D2Sharp = false;
	var E2 = true;
	var F2 = true;
		var F2Sharp = false;
	var G2 = true;
		var G2Sharp = false;
	var A2 = true;
		var A2Sharp = false;
	var B2 = true;
};

function GMaj(){
	// 1 Sharp F
	var C1 = true;
		var C1Sharp = false;
	var D1 = true;
		var D1Sharp = false;
	var E1 = true;
	var F1 = false;
		var F1Sharp = true;
	var G1 = true;
		var G1Sharp = false;
	var A1 = true;
		var A1Sharp = false;
	var B1 = true;
	var C2 = true;
		var C2Sharp = false;
	var D2 = true;
		var D2Sharp = false;
	var E2 = true;
	var F2 = false;
		var F2Sharp = true;
	var G2 = true;
		var G2Sharp = false;
	var A2 = true;
		var A2Sharp = false;
	var B2 = true;
};

function DMaj(){
	// 2 sharps F,C
	
	var C1 = false;
		var C1Sharp = true;
	var D1 = true;
		var D1Sharp = false;
	var E1 = true;
	var F1 = false;
		var F1Sharp = true;
	var G1 = true;
		var G1Sharp = false;
	var A1 = true;
		var A1Sharp = false;
	var B1 = true;
	var C2 = false;
		var C2Sharp = true;
	var D2 = true;
		var D2Sharp = false;
	var E2 = true;
	var F2 = false;
		var F2Sharp = true;
	var G2 = true;
		var G2Sharp = false;
	var A2 = true;
		var A2Sharp = false;
	var B2 = true;
};

function AMaj(){
	//3 Shraps F,C,G
	
	var C1 = false;
	var C1Sharp = true;
	var D1 = true;
	var D1Sharp = false;
	var E1 = true;
	var F1 = false;
	var F1Sharp = true;
	var G1 = false;
	var G1Sharp = true;
	var A1 = true;
	var A1Sharp = false;
	var B1 = true;
	var C2 = true;
	var C2Sharp = false;
	var D2 = true;
	var D2Sharp = false;
	var E2 = true;
	var F2 = true;
	var F2Sharp = false;
	var G2 = true;
	var G2Sharp = false;
	var A2 = true;
	var A2Sharp = false;
	var B2 = true;
};

function EMaj(){
	//4 Sharps F,C,G,D
	
	var C1 = false;
	var C1Sharp = true;
	var D1 = false;
	var D1Sharp = true;
	var E1 = true;
	var F1 = false;
	var F1Sharp = true;
	var G1 = false;
	var G1Sharp = true;
	var A1 = true;
	var A1Sharp = false;
	var B1 = true;
	var C2 = true;
	var C2Sharp = false;
	var D2 = true;
	var D2Sharp = false;
	var E2 = true;
	var F2 = true;
	var F2Sharp = false;
	var G2 = true;
	var G2Sharp = false;
	var A2 = true;
	var A2Sharp = false;
	var B2 = true;
};

function BMaj(){
	//5 Sharps F,C,G,D,A
	
	var C1 = false;
		var C1Sharp = true;
	var D1 = false;
		var D1Sharp = true;
	var E1 = true;
	var F1 = false;
		var F1Sharp = true;
	var G1 = false;
		var G1Sharp = true;
	var A1 = false;
		var A1Sharp = true;
	var B1 = true;
	var C2 = false;
		var C2Sharp = true;
	var D2 = false;
		var D2Sharp = true;
	var E2 = true;
	var F2 = false;
		var F2Sharp = true;
	var G2 = false;
		var G2Sharp = true;
	var A2 = false;
		var A2Sharp = true;
	var B2 = true;
};

function BMaj(){
	//5 Sharps F,C,G,D,A
	
	var C1 = false;
		var C1Sharp = true;
	var D1 = false;
		var D1Sharp = true;
	var E1 = true;
	var F1 = false;
		var F1Sharp = true;
	var G1 = false;
		var G1Sharp = true;
	var A1 = false;
		var A1Sharp = true;
	var B1 = true;
	var C2 = false;
		var C2Sharp = true;
	var D2 = false;
		var D2Sharp = true;
	var E2 = true;
	var F2 = false;
		var F2Sharp = true;
	var G2 = false;
		var G2Sharp = true;
	var A2 = false;
		var A2Sharp = true;
	var B2 = true;
};

function AminHarmonic(){
	//5 Sharps F,C,G,D,A
	
	var C1 = true;
		var C1Sharp = false;
	var D1 = true;
		var D1Sharp = false;
	var E1 = true;
	var F1 = true;
		var F1Sharp = false;
	var G1 = false;
		var G1Sharp = true;
	var A1 = true;
		var A1Sharp = false;
	var B1 = true;
	var C2 = true;
		var C2Sharp = false;
	var D2 = true;
		var D2Sharp = false;
	var E2 = true;
	var F2 = true;
		var F2Sharp = false;
	var G2 = false;
		var G2Sharp = true;
	var A2 = true;
		var A2Sharp = false;
	var B2 = true;
}