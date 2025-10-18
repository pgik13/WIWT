console.log("im working");
const movie = document.getElementById("movie");
const addMovie = document.getElementById("addMovie");
const movieList = document.getElementById("movieList");

//Load saved movies
window.addEventListener("DOMContentLoaded", () => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    savedMovies.forEach(movie => addMovieToDOM(movie));
});

//Add new movie
addMovie.addEventListener("click", () => {
    const title = movie.value.trim();
    console.log("click");

    if (title === "") {
        alert("Stop playing with me")
    } else {
        const movieObject = {
            title: title,
            watched: false,
            date: ""
        };

        addMovieToDOM(movieObject);
        alert("Make sure to click the checkbox after you've watched it");
        saveToLocalStorage();
        movie.value = "";
    }
});

//Add movie to DOM 
function addMovieToDOM(movieObject) {

    const li = document.createElement("ul");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = movieObject.title;
    titleSpan.classList.add("movie_title");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = movieObject.watched;
    check.classList.add("movie_watched")

    const date = document.createElement("input");
    date.type = "date";
    date.value = movieObject.date;
    date.style.display = check.checked ? "inline" : "none";
    date.classList.add("movie_date");

    const label = document.createElement("label");
    label.textContent = "When did you watch it?";
    label.style.display = check.checked ? "inline" : "none";
    label.appendChild(date);

    check.addEventListener("change", () => {
        const show = check.checked;
        date.style.display = show ? "inline" : "none";
        label.style.display = show ? "inline" : "none";
        saveToLocalStorage();
    });

    date.addEventListener("change", () => {
        saveToLocalStorage
    });

    li.appendChild(titleSpan);
    li.appendChild(check);
    li.appendChild(label);

    movieList.appendChild(li);

}

//Save movies to local storage
function saveToLocalStorage() {
    const movies = Array.from(movieList.children).map(li => {
        return {
            title: li.querySelector(".movie_title").textContent,
            watched: li.querySelector(".movie_watched").checked,
            date: li.querySelector(".movie_date").value
        };
    });

    localStorage.setItem("movies", JSON.stringify(movies));
}

//Clear list
const clearList = document.getElementById("clearList").addEventListener("click", () => {
    const confirmClear = confirm("This clears the WHOLE list! Are you sure you wanna do this, brev?")
    if (confirmClear) {
        movieList.innerHTML = "";
        localStorage.removeItem("movies");
    }

});