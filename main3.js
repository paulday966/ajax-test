const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
    /*console.log(this.readyState);*/ /* Will see more than one log to the console and will happen every single time the function is called and
    /* not just when the readyState is equal to 4 and the status is equal to 200*/
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // At this point it's goint to run the function that we passed it to getData as an argument
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    let el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        /*console.dir(data);*/
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);

        //data.forEach(function(item) {
            // el.innerHTML += "<p>" + InputEvent.name + "</p>";

        data.forEach(function(item) {
            //Object.keys(item).forEach(function(key) {
                //console.log(key);
            });
            /*document.getElementById("data").innerHTML += "<p>" + item.name + "</p>";*/
            // el.innerHTML += "<p>" + item.name + "</p>";

        el.innerHTML = `<table>${tableHeaders}</table>`;

        /*document.getElementById("data").innerHTML = data.results;*/
    });
}