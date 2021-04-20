$(".switch").find("input[type=checkbox]").on("change",function() {
    var status = $(this).prop('checked');

     $.ajax({
        url : url,
        type : "post",
        data : { status : status}
    })
});

function hideLabelled(){
    for (var key in controller.samples){
        sample = $(`#${key}`)

        if (sample.is("visible")==false){
            sample.show()
        } else {
            sample.hide();
        }
    }
}