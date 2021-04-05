function gateSet() {

    $.ajax({
        type : "POST",
        url : "gate.json",
        dataType : 'json',
        contentType : 'application/json',
        success : function (data) {
            var list=[]; // 리스트 태그, 아토믹정보 데이터
            var ul=""; // ul에 삽입될 총 list
            for(var i=0; i< data.length; i++){
                list.push(listOne(data[i]));
            }

            ul=listSet(list);

            $("#gate").append(
                "<div class='atom'><h1>ATOM</h1><ul>"+ul.atom+"</ul></div>"+
                "<div class='module'><h1>MODULE</h1><ul>"+ul.module+"</ul></div>"+"" +
                "<div class='component'><h1>COMPONENT</h1><ul>"+ul.component+"</ul></div>"+
                "<div class='template'><h1>TEMPLATE</h1><ul>"+ul.template+"</ul></div>"
            );
        },
        error   : function () {
            console.log("error");
        }

    });
    
    // 리스트 데이터 세팅 (아토믹정보, 리스트단개)
    function listOne(data) {
        var LINE = {
            htmlLi:"",
            atomic:data.atomic
        }

        LINE.htmlLi+='<li>' +
                    '<span class="desc">'+data.desc+'</span>' +
                    '<a class="url" href="'+data.href+'"><span>'+data.href+'</span></a>' +
                  '</li>'
        return LINE;
    }

    // 리스트 데이터 세팅 (아토믹에 따른 list 목록화)
    function listSet(data){
        var LIS={
            atom:"",
            module:"",
            component:"",
            template:""
        }
        for(var i=0; i<data.length; i++){
            switch (data[i].atomic){
                case "atom":
                    LIS.atom+=data[i].htmlLi;
                    break;
                case "module":
                    LIS.module+=data[i].htmlLi;
                    break;
                case "component":
                    LIS.component+=data[i].htmlLi;
                    break;
                case "template":
                    LIS.template+=data[i].htmlLi;
                default:
                    break;
            }
        }

        return LIS;
    }
}