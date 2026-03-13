for (var i=0 ; i<document.querySelectorAll(".white").length;i++){
    document.querySelectorAll(".white")[i].addEventListener("click",function (){
        soundOnClick(this.innerHTML)
    })
}

function soundOnClick(key){
    switch(key.toLowerCase()){
        case "a":
        var a_note = new Audio('sounds/piano-a.mp3');
        a_note.play();
        break

        case "b":
        var b_note = new Audio('sounds/piano-b.mp3');
        b_note.play();
        break

        case "c":
        var c_note = new Audio('sounds/piano-c.wav');
        c_note.play();
        break

        case "d":
        var d_note = new Audio('sounds/piano-d.wav');
        d_note.play();
        break

        case "e":
        var e_note = new Audio('sounds/piano-e.wav');
        e_note.play();
        break

        case "f":
        var f_note = new Audio('sounds/piano-f.wav');
        f_note.play();
        break

        case "g":
        var g_note = new Audio('sounds/piano-g.wav');
        g_note.play();
        break

        default:
        console.log(this)
    }
}