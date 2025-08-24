
// Typewriter effect for the hero section

document.addEventListener("DOMContentLoaded", () => {
    // List of words to type
    const words = [
        "Front End Developer",
        "Web Developer",
        "Breaker",
        "Hooper",
        "Rock Climber",
        "Problem Solver",
        "Role Player",
        "Washed PC Gamer",
        "Japanese Speaker",
        "Hard Worker",
    ]

    //gets the span tag to type into
    const e = document.getElementById("typer");
    // Defines the speed of typing, deleting, and pausing
    const speed = {type: 80, delete: 40, pause : 500};

    // index for the current word and character
    let i = 0;
    let j = 0;

    // flag to check if we are deleting
    let deleteing = false;

    function typer() {
        //get the current word
        const word = words[i];
        //makes the text length j characters long
        e.textContent=word.slice(0, j);
        //increase j if we arent deleting
        if(!deleteing && j < word.length) {
            j++;
            setTimeout(typer, speed.type);
        }
        //decrease j if we are deleting
        else if (deleteing && j > 0) {
            j--;
           setTimeout(typer, speed.delete);
        }
        //swtich between typing and deleting if j == 0 or j == word.length
        else{
            deleteing = !deleteing;
            if(!deleteing) {
                i = (i + 1) % words.length;
               setTimeout(typer, speed.pause);
           }
            else {
                setTimeout(typer, speed.type);
            }
    }
}


    typer();
});