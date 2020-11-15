function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
    /*console.log(this.readyState);*/ /* Will see more than one log to the console and will happen every single time the function is called and
    /* not just when the readyState is equal to 4 and the status is equal to 200*/
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // At this point it's goint to run the function that we passed it to getData as an argument
        }
    };

    xhr.open("GET", url);
    xhr.send();

}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("data");
    //el.innerHTML = "";

    getData(url, function(data) {
        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous)
        }
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);


        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key){
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });

            tableRows.push(`<tr>${dataRow}</tr>`);

        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, ""); // .replace(/,/g). This means all of the commas that appear near
        // the top of the page will be found; not just the first one with an empty string
    });
}