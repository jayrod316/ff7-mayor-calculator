function getInputValue() {

    let seconds = document.getElementById("igt").value;

    console.log(seconds)

    let passwords = [
        "Option 5 - MAKO",
        "Option 2 - KING",
        "Option 1 - BEST",
        "Option 4 - BOMB"
    ]

    if (seconds <= 60) {
        function find() {
            return seconds % 4;
        }

        let key = find(seconds)

        let solution = passwords[key]

        console.log(solution)

        document.getElementById("solution").innerHTML = solution;
    }

    else {
        document.getElementById("solution").innerHTML = "Sorry! You must enter an integer between 0 and 60!"
    }

}