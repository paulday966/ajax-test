let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        /*console.log(JSON.parse(this.responseText));*/
        /*document.getElementById("data").innerHTML = this.responseText;*/
        /*console.log(typeof(JSON.parse(this.responseText)));*/
        /*console.log(typeof(this.responseText));*/
    }
};

console.log(data);