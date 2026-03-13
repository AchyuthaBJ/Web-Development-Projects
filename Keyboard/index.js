for (var i=0 ; i<document.querySelectorAll(".white").length;i++){
    document.querySelectorAll(".white")[i].addEventListener("click",function (){
        soundOnClickWhite(this.innerHTML)
    })
}

for (var i=0 ; i<document.querySelectorAll(".black").length;i++){
    document.querySelectorAll(".black")[i].addEventListener("click",function (){
        soundOnClickBlack(this.innerHTML)
    })
}


function soundOnClickWhite(key){
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

function soundOnClickBlack(key){
    switch(key.toLowerCase()){
        case "c#":
        var csharp_note = new Audio('sounds/piano-csharp.mp3');
        csharp_note.play();
        break

        case "d#":
        var dsharp_note = new Audio('sounds/piano-dsharp.mp3');
        dsharp_note.play();
        break

        case "f#":
        var fsharp_note = new Audio('sounds/piano-fsharp.mp3');
        fsharp_note.play();
        break

        case "g#":
        var gsharp_note = new Audio('sounds/piano-gsharp.mp3');
        gsharp_note.play();
        break

        case "a#":
        var asharp_note = new Audio('sounds/piano-asharp.mp3');
        asharp_note.play();
        break

        default:
        console.log(this)
    }
}