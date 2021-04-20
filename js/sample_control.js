class SampleControl{
    constructor(){
        this.sampleCount = 0
        this.samples = {}
        this.classNames = []
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

    addClassName(name){
        this.classNames.push(name);
    }
}

var controller = new SampleControl();

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function addSample(content){
    const randomSampleID = guidGenerator();
    const cardDetails = `
            <div class="sample card grey lighten-2" id=${randomSampleID}>
                <div class="black-text">
                    <div id="sample-1-text" class="card-content">
                        ${content}
                    </div>
                </div>

                <div id="label-container" class="card-content">
                </div>

                <div class="card-action">
                    <input type="text" class="autocomplete" placeholder="type in your class here" style="width: 400px;">
                    <button class="waves-effect orange darken-1 btn"><i class="material-icons" onclick="addLabel(this)">add_circle_outline</i></button>
                </div>
            </div>
        `
    $("#card-holder").append(cardDetails);
    $('input.autocomplete').autocomplete({
		source: controller.classNames
    });
    controller.addSample(randomSampleID, content)
}


function addLabel(e){
    const sampleContainer = e.parentNode.parentNode.parentNode
    const sampleID = sampleContainer.id
    const label = sampleContainer.getElementsByClassName("autocomplete")[0].value
    const randomLabelID = guidGenerator();

    const classDetails = `
        <button id=${randomLabelID} class="waves-effect grey lighten-5 btn black-text" onclick="removeLabel(this)">${label}</button>
    `
    sampleContainer.querySelector("#label-container").insertAdjacentHTML("beforeend", classDetails);

    controller.addLabel(sampleID, randomLabelID, label)
}

function removeLabel(e){
    const sampleContainer = e.parentNode.parentNode
    const sampleID = sampleContainer.id
    const labelID = e.id

    console.log(sampleContainer, sampleID, labelID)

    controller.removeLabel(sampleID, labelID)
    document.getElementById(labelID).remove();
}
