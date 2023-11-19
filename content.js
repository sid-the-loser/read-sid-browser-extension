// Toggle button creation
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle";
toggleButton.className = "toggle-button-sid"

// Create a <style> element to contain the custom CSS rules
const styleElement = document.createElement("style");

// Define the CSS rule to add a border to every element
const cssRules = `
  .toggle-button-sid{
    border: 2px solid lightblue;
    background-color: antiquewhite;
    color: black;
    z-index: 9999;
    bottom: 0px;
    right: 0px;
    position: fixed;
  }
  .toggle-button-sid:hover{
    border: 2px solid red;
    background-color: black;
    color: antiquewhite;
    font-style
  }`;

/*
  a {
    border: 1px solid blue !important;
    color: black;
  }
  b{
    color: black;
    background-color: yellow;
    font-weight: bold;
  }
*/

// Set the CSS rules as the content of the <style> element
styleElement.textContent = cssRules;

// Append the <style> element to the <head> of the web page
document.head.appendChild(styleElement);

// Toggle button functionality

var _changes = false;

// Getting all the necessary tags from html file
const _aElement = document.querySelectorAll('a');
const _bElement = document.querySelectorAll('b');

// Default settings of these styles
// a
var _aStyleBorder = [];
var _aStyleColor = [];
// b
var _bStyleColor = [];
var _bStyleBgColor = [];
var _bStyleFontWeight = [];

// Setting the value to the default values
// a
_aElement.forEach((a) => {
  _aStyleBorder.push(a.style.border);
  _aStyleColor.push(a.style.color);
});
// b
_bElement.forEach((b) => {
  _bStyleBgColor.push(b.style.backgroundColor);
  _bStyleColor.push(b.style.color);
  _bStyleFontWeight.push(b.style.fontWeight);
});

function toggle(){
  _changes = !_changes;
  const _button = document.querySelectorAll("button");
  if (_changes){ // when true
    _button.forEach((b) => {
      if (b.className == "toggle-button-sid"){
        b.style.border = "2px solid blue";
      }
    });
    // a
    _aElement.forEach((a) => {
      a.style.border = "1px solid blue";
      a.style.color = "black";
    });
    // b
    _bElement.forEach((b) => {
      b.style.backgroundColor = "yellow";
      b.style.color = "black";
      b.style.fontWeight = "bold";
    });
  }
  else{ // when false
    _button.forEach((b) => {
      if (b.className == "toggle-button-sid"){
        b.style.border = "2px solid lightblue";
      }
    });
    // b
    for (var i = 0; i < _bStyleColor.length; i++){
      _bElement[i].style.color = _bStyleColor[i];
      _bElement[i].style.backgroundColor = _bStyleBgColor[i];
      _bElement[i].style.fontWeight = _bStyleFontWeight[i];
    }
    // a
    for (var i = 0; i < _aStyleColor.length; i++){
      _aElement[i].style.color = _aStyleColor[i];
      _aElement[i].style.border = _aStyleBorder[i];
    }
  }
}

toggleButton.addEventListener("click", toggle); // Adding toggle functionality to the button
document.body.appendChild(toggleButton); // Adding toggle button to the websites code

