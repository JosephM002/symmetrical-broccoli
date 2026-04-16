var amphibians = ["Frog","Newt","Salamander","Axolotl"];
// loop traverses the ray to set up each button with a different amphibian type
// each part of the loop checks the next "amp" button, and sets its text
for (var i = 0; i < amphibians.length; i++){
    setText("amp"+i,amphibians[i]);
}
// this function sets the screen when the player chooses the correct answer.
function frogcorrect(){
    setScreen("frogFact.html");
}
function froginc(){
    setScreen("incorrect.html");
}

onEvent("amp1", "click", function( ) {
         frogcorrect();
});
onEvent("amp0", "click", function( ) {
         froginc();
});
onEvent("amp2", "click", function( ) {
         froginc();
});
onEvent("amp3", "click", function( ) {
         froginc();
});