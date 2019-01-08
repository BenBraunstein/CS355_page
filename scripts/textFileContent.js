var urls = [];
var textLines;
uploadSplitText();


function uploadSplitText(){
    const input = 
    document.querySelector("input[type='file']");
    input.addEventListener('change', function (e) {
       // console.log(input.files);
        const reader = new FileReader();
        reader.onload = function () {
            //console.log(reader.result);
            textLines = reader.result.split('\n');
            for(let x = 0; x < textLines.length; ++x){
                urls[x] = {};
            }
            convertToUrl(textLines);
        }
        reader.readAsText(input.files[0]);

    }, false)
}

function convertToUrl(textLines){
    for (let i = 0; i < textLines.length -1; i++){
        urls[i] = new URL(textLines[i]);
        //console.log(urls[i]);
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var jsonResponse = JSON.parse(this.response);
                var ipResponse = jsonResponse.Answer[jsonResponse.Answer.length - 1].data;
                urls[i].ipAddress = ipResponse;
                urls[i].tld = urls[i].host.split('.').pop();
                writeURLInfo(urls[i]);
                writeURLGraph();
                console.log(urls[i]);
            }
        };
        xhttp.open("GET", "https://dns.google.com/resolve?name=" + urls[i].host, true);
        xhttp.send(urls);
    }
}

function writeURLInfo(url){
    //USE THIS FORMAT: $(".URLInfo").append("<p>Testing 1.2.3</p>");
    $(".URLInfo").append("<p><strong>HREF: </strong><a target='_blank' href='" + url.href + "'" + ">" + url.href + "</a></p>");
    $(".URLInfo").append("<p><strong>IP Address: </strong>" + url.ipAddress + "</p>");
    $(".URLInfo").append("<p><strong>Host: </strong>" + url.host + "</p>");
    $(".URLInfo").append("<p><strong>Scheme: </strong>" + url.protocol + "</p>");
    $(".URLInfo").append("<p><strong>User Info: </strong>" + url.username + "</p>");
    $(".URLInfo").append("<p><strong>Port: </strong>" + url.port + "</p>");
    $(".URLInfo").append("<p><strong>Path: </strong>" + url.pathname + "</p>");
    $(".URLInfo").append("<p><strong>Query: </strong>" + url.search + "</p>");
    $(".URLInfo").append("<p><strong>Fragment: </strong>" + url.hash + "</p>");
    $(".URLInfo").append("<p><strong>TLD: </strong>" + url.tld + "</p>");
    $(".URLInfo").append("<br>");

}

function writeURLGraph(urls) {
    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}

// Draw the chart and set the chart values
function drawChart() {
    var comNum = 0;
    var orgNum = 0;
    var govNum = 0;
    var eduNum = 0;
    var otherNum = 0;

    for (let i = 0; i < urls.length - 1; i++) {
        if (urls[i].ipAddress == null)
            continue;
        else if (urls[i].tld == "com")
            comNum++;
        else if (urls[i].tld == "org")
            orgNum++;
        else if (urls[i].tld == "gov")
            govNum++;
        else if (urls[i].tld == "edu")
            eduNum++;
        else
            otherNum++;
    }
    var data = google.visualization.arrayToDataTable([
        ['TLD', 'Number in History'],
        ['com', comNum],
        ['org', orgNum],
        ['gov', govNum],
        ['edu', eduNum],
        ['other', otherNum]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'TLD History Occurrences', 'width': 400, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

    $(".amountOfURLs").replaceWith("<h5 style='color:red;'>Amount of URLs analyzed: " + urls.length + "</h5>");

}