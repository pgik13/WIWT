console.log("im working");
const movie = document.getElementById("movie");
const addMovie = document.getElementById("addMovie");
const movieList = document.getElementById("movieList");
addMovie.addEventListener("click", () => {
    const title = movie.value.trim();
    console.log("click");

    if (title === "") {
        alert("Stop playing with me")
    } else {
        const li = document.createElement("ul");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = title;

        const check = document.createElement("input");
        check.type = "checkbox";

        const date = document.createElement("input");
        date.type = "date";
        date.style.display = "none";

        const label = document.createElement("label");
        label.textContent = "What day did you watch it?";
        label.style.display = "none";
        label.appendChild(date);

        check.addEventListener("change", () => {
            if (check.checked) {
                date.style.display = "inline";
                label.style.display = "inline";
            } else {
                date.style.display = "none";
                label.style.display = "none";

            }
        });

        li.appendChild(titleSpan);
        li.appendChild(check);
        li.appendChild(label);

        movieList.appendChild(li);
        movie.value = "";
    }
});

const clearList = document.getElementById("clearList").addEventListener("click", () => {
    const confirmClear = confirm("This clears the WHOLE list! Are you sure you wanna do this, brev?")
    if (confirmClear) {
        movieList.innerHTML = "";
    }
    
});