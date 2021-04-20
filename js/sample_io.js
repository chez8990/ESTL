function startClassParsing(){
    $('#upload-class').parse({
        config: {
            delimiter: "",
            complete: addCSVClassToController
        },
        before: function(file, inputElem)
        {
            // console.log("Parsing file...", file);
        },
        error: function(err, file)
        {
            console.log("ERROR:", err, file);
        },
        complete: function()
        {
            //console.log("Done with all files");
        }
    });
    return false
}

function startSamplesParsing(){
    $('#upload-samples').parse({
        config: {
            delimiter: "",
            complete: addCSVToSamples, 
            header: true
        },
        before: function(file, inputElem)
        {
            // console.log("Parsing file...", file);
        },
        error: function(err, file)
        {
            console.log("ERROR:", err, file);
        },
        complete: function()
        {
            //console.log("Done with all files");
        }
    });
    return false
}

function addCSVClassToController(results){
    var data = results.data;
    for (i=0;i<data.length;i++){
        var row = data[i];
        controller.addClassName(row[0]) 
        // addSample(contentString);
    }
    return false
}

function addCSVToSamples(results){
    var data = results.data;
    for (i=0;i<data.length;i++){
        var row = data[i];
        var contentString = ""
        for (var key in row){
            contentString = contentString + key + ": " + row[key] + ' \n'
        }
        
        addSample(contentString);
    }
    return false
}
	
function downloadSamplesJSON(){
    if (controller.sampleCount > 0){
        var sampleJSON = JSON.stringify(controller.samples)
        var blob = new Blob([sampleJSON], { type: "text/plain;charset=utf-8" });
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, "Customers.txt");
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.download = "Customers.txt";
            a.href = link;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    } 
}
