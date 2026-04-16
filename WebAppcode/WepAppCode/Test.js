for (i = 0; i < correct.length; i++){
    if(homebutton.click = true){
        homecounter = homecounter +1
} if(homecounter == 3){
    setScreen("Finalscore.html");
}
}
var success = 0;

onEvent("button1", "click", function( ) {
  success = success + 1;
  console.log(success);
  setScreen("index.html")
});

for (i = 0; i < correct.length; i++){
    if(homebutton.click = true){
        button();
        finalscore = finalscore + ((correct[i]+1)*100)
}
}

function button ("click", function() {
  homecounter = homecounter +1;
//homecounter is only checked on fact screens, therefore if clicked x 3, all screens reached
  if(homecounter == 3){
    setScreen("Finalscore.html");
}
});
audioplayer.src="https://codehs.com/uploads/13ea015b645bd5499bea85f20d9c787a"
playButton.addEventListener('click', () => {
audioPlayer.play();
});
onEvent("amp100", "click", function( ) {
  setScreen("ampScreen");
  playSound("sound://category_app/app_interface_button_4.mp3", false);
  stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
});
onEvent("amp100", "mouseover", function( ) {
  setProperty("amp100", "text-color", "red");
});
onEvent("amp100", "mouseout", function( ) {
  setProperty("amp100", "text-color", "white");
});
onEvent("bird200", "click", function( ) {
  setScreen("birdScreen");
  playSound("sound://category_app/app_interface_button_4.mp3", false);
  stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
});
onEvent("bird200", "mouseover", function( ) {
  setProperty("bird200", "text-color", "red");
});
onEvent("bird200", "mouseout", function( ) {
  setProperty("bird200", "text-color", "white");
});
onEvent("rep300", "click", function( ) {
  setScreen("repScreen");
  playSound("sound://category_app/app_interface_button_4.mp3", false);
  stopSound("sound://category_loops/faultering_desicion_loop1.mp3");
});
onEvent("rep300", "mouseover", function( ) {
  setProperty("rep300", "text-color", "red");
});
onEvent("rep300", "mouseout", function( ) {
  setProperty("rep300", "text-color", "white");
});
onEvent("homebutton1", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton2", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton3", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton4", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton5", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton6", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton7", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("ampcorrect", "click", function( ) {
  setScreen("frogFact");
  playSound("sound://category_achievements/peaceful_win_1.mp3", false);
});
onEvent("birdcorrect", "click", function( ) {
  setScreen("birdFact");
  playSound("sound://category_achievements/peaceful_win_1.mp3", false);
});
onEvent("repcorrect", "click", function( ) {
  setScreen("reptileFact");
  playSound("sound://category_achievements/peaceful_win_1.mp3", false);
});
onEvent("ampincorrect1", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("ampincorrect2", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("ampincorrect3", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("birdincorrect1", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("birdincorrect2", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("birdincorrect3", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("repincorrect1", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("repincorrect2", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("repincorrect3", "click", function( ) {
  setScreen("Incorrect");
  playSound("sound://category_alerts/comedy_game_over_1.mp3", false);
});
onEvent("button1", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("button2", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("button3", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("button4", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("button5", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("button6", "click", function( ) {
  setScreen("plsfix");
  playSound("sound://category_loops/faultering_desicion_loop1.mp3", false);
});
onEvent("homebutton8", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homebutton7", "click", function(){
  setScreen("homeScreen");
});