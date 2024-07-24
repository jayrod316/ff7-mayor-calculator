function getInputValue() {

    let seconds = document.getElementById("igt").value;

    let passwords = [
        "Option 5 - MAKO",
        "Option 2 - KING",
        "Option 1 - BEST",
        "Option 4 - BOMB"
    ]

    if (seconds >= 0) {
        function find(seconds) {
            return key = Math.trunc(seconds % 4);
        }

        key = find(seconds)

        let psxsolution = passwords[key]
        let pcsolution = passwords[(key + 2) % 4]

        document.getElementById("psxsolution").innerHTML = "PSX: " + psxsolution;
        document.getElementById("pcsolution").innerHTML = "PC: " + pcsolution;
    }

    else {
        document.getElementById("psxsolution").innerHTML = "You must enter a positive integer."
        document.getElementById("pcsolution").innerHTML = "You must enter a positive integer."

    }
}


