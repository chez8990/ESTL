function startCSVParsing(){
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
	