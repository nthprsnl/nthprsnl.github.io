var splashes = [
    '2 cool 4 splash',
    'the 3rd revision!',
    'the 4th revision!',
    'the 5th revision!',
    'Help github copilot is takin- beautiful!',
    'the 6th revision!',
    'lorem ipsum',
    'Test splash, please replace',
    'HELP IT KEEPS SUGGESTING ME REVISIONS',
    'how do you align text',
    "i don't have any more splashes"
]

function splash(id) {
    var splash = document.getElementById(id)
    var random = Math.floor(Math.random() * splashes.length)
    splash.innerText = splashes[random]
}

var styles = `
    .font-default {
        font-family: squares;
    }
`
var styles2 = `
    .font-default {
        font-family: Segoe UI;
    }
`

$(function(){
    $("#buttons").load("/assets/other/buttons.html"); 
    //load master.html to the body element
});

// here comes terrible toggle code
var f = 1
function squareify() {
    if (f == 1) {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    styleSheet.id = "f"
    document.body.appendChild(styleSheet)
    f = 2
    } else if (f == 2) {
        document.body.removeChild(document.getElementById("f"))
        var styleSheet = document.createElement("style")
        f = 1
    }
}