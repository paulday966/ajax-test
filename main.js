let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

/*function setData(jsonData) {
    data = jsonData;
}*/

xhr.onreadystatechange = function() {
    /*console.log(this.readyState);*/ /* Will see more than one log to the console and will happen every single time the function is called and
    /* not just when the readyState is equal to 4 and the status is equal to 200*/
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
        /*setData(JSON.parse(this.responseText));*/
        
        /*data = this.responseText;*/
        /*console.log(JSON.parse(this.responseText));*/
        /*document.getElementById("data").innerHTML = this.responseText;*/
        /*console.log(typeof(JSON.parse(this.responseText)));*/
        /*console.log(typeof(this.responseText));*/
        /*console.log(data);*/
    }
};

/*console.log(data);*/

setTimeout(function() {
    console.log(data);
}, 500);