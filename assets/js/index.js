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

function gibberish(id) {
    var sequence = randoSequence("abcdefghijklmnopqrstuvwxyz!@#$%^&*()~_+-=;'[],./{}\\1234567890|").join("")
    var gibberish = document.getElementById(id)
    gibberish.innerText = sequence
}
// here comes terrible toggle code
var f = 0
function squareify() {
    f += 1;
    if (f == 1) {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    styleSheet.id = "f"
    document.body.appendChild(styleSheet)
    } else if (f == 2) {
        document.body.removeChild(document.getElementById("f"))
        var styleSheet = document.createElement("style")
        styleSheet.innerText = styles2
        styleSheet.id = "f"
        document.body.appendChild(styleSheet)
    } else if (f == 3) {
        document.body.removeChild(document.getElementById("f"))
        f = 0;
    }
}