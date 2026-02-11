// Typewriter effect for the hero section

document.addEventListener("DOMContentLoaded", () => {
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

    const e = document.getElementById("typer");
    const speed = {type: 80, delete: 40, pause : 500};

    let i = 0;
    let j = 0;
    let deleteing = false;

    function typer() {
        const word = words[i];
        e.textContent=word.slice(0, j);

        if(!deleteing && j < word.length) {
            j++;
            setTimeout(typer, speed.type);
        }
        else if (deleteing && j > 0) {
            j--;
           setTimeout(typer, speed.delete);
        }
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
