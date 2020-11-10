/*let xhr = new XMLHttpRequest();
let data;*/

function getData(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
    /*console.log(this.readyState);*/ /* Will see more than one log to the console and will happen every single time the function is called and
    /* not just when the readyState is equal to 4 and the status is equal to 200*/
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // At this point it's goint to run the function that we passed it to getData as an argument
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

/*getData(function(data) {
    console.log(data);
});*/