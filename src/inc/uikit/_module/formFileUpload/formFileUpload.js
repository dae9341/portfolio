function __formFileUpload(wrapperId, option) {
    var me = this;
    var opt = $.extend({
        defaultText:"선택된 파일없음"
    },option);
    const $inputText = $(wrapperId).find("input[type=text]");
    const $inputFile = $(wrapperId).find("input[type=file]");

    $inputText.val(opt.defaultText);

    $inputFile.on("change", function () {
        var $me = $(this);
        me.value = $me.val(); // value 값

        if(me.value){
            let tempValue = me.value;
            tempValue = tempValue.split("\\");
            me.fileName = tempValue[tempValue.length-1];
            $inputText.val(me.fileName);
            $inputText.addClass("-uploaded");
        }else{
            $inputText.val(opt.defaultText);
            $inputText.removeClass("-uploaded");
        }
    });


    return me;
}