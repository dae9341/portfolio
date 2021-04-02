function gateSet() {

    $.ajax({
        type : "POST",
        url : "gate.json",
        dataType : 'json',
        contentType : 'application/json',
        success : function (data) {
            dataSet(data);
        },
        error   : function () {
            console.log("error");
        }

    });
    
    
    //데이터 세팅
    function dataSet(data) {
        console.log(data);
    }
}