function inputClear(inputId){
    var me = this;
    var input = $(inputId).find(".a-formClearBtn__input");
    var clearButton = $(inputId).find(".a-formClearBtn__clear");

    input.on("keyup focus", function () {
        if(input.val() != "" ){
            clearButton.addClass("-init");
        }else{
            clearButton.removeClass("-init");
        }
    });

    input.on("blur",function(){
        setTimeout(function () {
            clearButton.removeClass("-init");
        },200)
    });

    clearButton.on("click",function () {
        input.val("");
        clearButton.removeClass("-init");
        return false;
    });
};