const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
    /*console.log(this.readyState);*/ /* Will see more than one log to the console and will happen every single time the function is called and
    /* not just when the readyState is equal to 4 and the status is equal to 200*/
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // At this point it's goint to run the function that we passed it to getData as an argument
        }
    };
}

function writeToDocument(type) {
    let el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        /*console.dir(data);*/
        data = data.results;

        data.forEach(function(item) {
            /*document.getElementById("data").innerHTML += "<p>" + item.name + "</p>";*/
            el.innerHTML += "<p>" + item.name + "</p>";
        });
        /*document.getElementById("data").innerHTML = data.results;*/
    });
}