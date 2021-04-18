$(document).ready(function(){
    createLabelCache()
});


function createLabelCache(){
    var currentDate = new Date(); 
    var datetime = currentDate.getDate() + "/"
                    + (currentDate.getMonth()+1)  + "/" 
                    + currentDate.getFullYear() + " @ "  
                    + currentDate.getHours() + ":"  
                    + currentDate.getMinutes() + ":" 
                    + currentDate.getSeconds();
    localStorage['datetime'] = datetime;
    localStorage['numSamples'] = 0;
    localStorage['samples'] = [];
    localStorage['lables'] = [];
    localStorage['language'] = 'en';
}

class SampleControl {
    constructor(){
        this.sampleCount = 0
        this.samples = {}
        this.classLabels = []
    }
    
    addOne(){
        this.count += 1
    }
    
    addSample(sampleID, content){
        var template = {
            "content": content,
            "labels": {}
        }
        
        this.samples[sampleID] = template
        this.sampleCount += 1;
    }

    addLabel(sampleID, labelID, label){
        this.samples[sampleID]['labels'][labelID] = label
    }

    removeLabel(sampleID, labelID){
        delete this.samples[sampleID]['labels'][labelID]
    }

    removeSample(sampleID){
        delete this.samples[sampleID]
    }
}

// export default sampleControl