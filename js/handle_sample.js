var sampleCounter = 1;

function addSample(content){
    const cardDetails = `
        <div class="card grey lighten-1" sampleID=${sampleCounter}>
            <div class="black-text">
                <div id="sample-1-text" class="card-content">
                    ${content}
                </div>
            </div>

            <div id="class-containers" class="card-content">
            </div>

            <div class="card-action">
                <input type="text" id="class-search" class="autocomplete" placeholder="type in your class here" style="width: 400px;">
                <button class="waves-effect orange darken-1 btn"><i class="material-icons" sampleID=${sampleCounter}>add_circle_outline</i></button>
            </div>
        </div>
    `
    document.getElementById("card-holder").insertAdjacentHTML("beforeend", cardDetails);
    sampleCounter += 1;
}


function addClass(sampleID, classCount, className){
    const classDetails = `
        <button id="sample-${sampleID}-class-${classCount}" class="waves-effect grey lighten-5 btn black-text" onclick="removeClass(this.id)">${className}</button>
    `
    document.getElementById(`sample-${sampleID}`).getElementsByClassName("class-container card-content")[0].insertAdjacentHTML("beforeend", classDetails);
}

function removeClass(id){
    document.getElementById(id).remove();
}
