var reptiles = ["Snake","Lizard","Crocodile","Turtle"];
// loop traverses the ray to set up each button with a different reptile type
// each part of the loop checks the next "rep" button, and sets its text
for (var i = 0; i < reptiles.length; i++){
    setText("rep"+i,reptiles[i]);
}
// this function sets the screen when the player chooses the correct answer.
function repcorrect(){
    setScreen("reptileFact.html");
}

onEvent("rep2", "click", function( ) {
         repcorrect();
});

function repinc(){
    setScreen("incorrect.html");
}


onEvent("rep0", "click", function( ) {
         repinc();
});
onEvent("rep3", "click", function( ) {
         repinc();
});
onEvent("rep1", "click", function( ) {
         repinc();
});