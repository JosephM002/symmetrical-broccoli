var birds = ["Chicken","Owl","Hawk","Pigeon"];
// loop traverses the ray to set up each button with a different bird type
// each part of the loop checks the next "bird" button, and sets its text
for (var i = 0; i < birds.length; i++){
    setText("bird"+i,birds[i]);
}
// this function sets the screen when the player chooses the correct answer.
function birdcorrect(){
    setScreen("birdFact.html");
}

onEvent("bird3", "click", function( ) {
         birdcorrect();
});
function birdinc(){
    setScreen("incorrect.html");
}


onEvent("bird0", "click", function( ) {
         birdinc();
});
onEvent("bird2", "click", function( ) {
         birdinc();
});
onEvent("bird1", "click", function( ) {
         birdinc();
});