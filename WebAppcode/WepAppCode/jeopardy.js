var reptile = false;
var frog = false;
var bird = false;
var hidden = true;
var clicked = 0;
var audio= new Audio("https://codehs.com/uploads/7008526c202cb2249273467ee80db887");
audio.play();

Credit ();

onEvent("rbutton","click",function(){
    reptile = true;
    setText("rbutton", "300 points!")
    clicked = clicked + 3;
});
onEvent("fbutton","click",function(){
    frog = true;
    setText("fbutton", "100 points!")
    clicked++;
});
onEvent("bbutton","click",function(){
    bird = true;
    setText("bbutton", "200 points!")
    clicked = clicked + 2;
});

onEvent ("finish","click",function(){
    // if all buttons were clicked, the credits are unlocked
    if (frog == true && reptile == true && bird == true){
  hidden = false;
  Credit ();
  audio.play();
}
  setText("finish",clicked*100 + " points!")
});

onEvent("Credits","click",function(){
    setScreen("attribution.html");
});


function Credit (){
    if (hidden == true){
    hideElement("Credits")
    } else (showElement("Credits"));
}