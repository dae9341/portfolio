function __input(inputId){
    var me = this;
    var input = $(inputId).find(".a-input__area");
    var clearButton = $(inputId).find(".a-input__clear");
    var pwViewButton = $(inputId).find(".a-input__pwView");

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

    console.log(typeof pwViewButton);
    pwViewButton.on("click", function (){
        if($(this).find("input[type=checkbox]").prop("checked")){
            $(this).find("input[type=checkbox]").prop("checked",false);
            input.attr("type","password");

        }else{
            $(this).find("input[type=checkbox]").prop("checked",true);
            input.attr("type","text");

        }
    });
};