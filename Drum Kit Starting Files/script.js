for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var but=this.id;
    makesound(but);
})
document.querySelectorAll(".drum2")[i].addEventListener("click",function(){
    var but=this.innerHTML;
    makesound(but);
})
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
})

function makesound(key){
    switch(key){
    case "w":
        var w=new Audio("./sounds/w.mp3");
        w.play();
        break;
        case "a":
          var a = new Audio("./sounds/a.mp3");
          a.play();
          break;
        case "s":
          var s = new Audio("./sounds/s.mp3");
          s.play();
          break;
        case "d":
          var d = new Audio("./sounds/d.mp3");
          d.play();
          break;
        case "j":
          var j = new Audio("./sounds/j.mp3");
          j.play();
          break;
        case "k":
          var k = new Audio("./sounds/k.mp3");
          k.play();
          break;
        case "l":
          var l = new Audio("./sounds/l.mp3");
          l.play();
          break;
          case "a":
            var a = new Audio("./sounds/a.mp3");
            a.play();

        default:
          console.log("Key not mapped to any sound.");
    }
}