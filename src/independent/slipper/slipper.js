function slipper(wrapperId, option){
    var me = this;
    var opt = $.extend({
        initIdx: 1, // 시작 인덱스 (범위 벗어날 경우 0번으로세팅
        speed:500, // 슬라이딩 속도 
        loop:true // 무한루프 사용여부

    },option);

    me = {
        $slipper:{
            container:$(wrapperId),  // 컨테이너 최상단 껍데기
            wrapper:$(wrapperId).find(".slipper-wrapper"), // translate 움직이는 중간 껍데기
            items:$(wrapperId).find(".slipper-item"), // 슬라이드 요소
            nextBtn: $(wrapperId).find(".slipper-btns-next"), // 다음 버튼
            prevBtn: $(wrapperId).find(".slipper-btns-prev"), // 이전 버튼
            len: $(wrapperId).find(".slipper-item").length, // 슬라이드 갯수
        },
        index: opt.initIdx,  // 현재 인덱스
        width:"", // width
        height:"", // height
        pos:"", // 현재 translateX 값
        speed:opt.speed // 슬라이딩 속도

    };


    const init = function(){

        return new Promise(function (resolve,reject) {

            var w = me.$slipper.items.width();
            var h = me.$slipper.items.height();
            var all_w = w * me.$slipper.len;
            var pos = (all_w - w ) /2;
            me.index = (me.index <0 || me.index>= me.$slipper.len) ? 0:me.index; // 범위를 벗어날경우 0으로 세팅해준다.
            pos = pos - (w* me.index);

            var $firstItem = me.$slipper.items.eq(0);
            var $lastItem = me.$slipper.items.eq(me.$slipper.len-1);

            if(opt.loop){ //무한루프일때 clone 생성
                var $cloneFirstItem = $firstItem.clone().addClass("-cloneItem");
                var $cloneLastItem = $lastItem.clone().addClass("-cloneItem");

                //clone item 세팅
                $firstItem.before($cloneLastItem);
                $lastItem.after($cloneFirstItem);
            }



            me.$slipper.container.css({
                width:w,
                height:h
            });

            me.$slipper.wrapper.css({
                transitionDuration: me.speed+"ms",
                transform: "translate3d("+pos+"px, 0 ,0 )"
            });



            me.pos=pos;
            me.width = w;
            me.height = h;
            me.allWidth = all_w;

            resolve();

        });
    };

    me.move = function(idx){

        function move() {
            return new Promise(function (resolve,reject) {
                me.pos = me.pos - (me.width * (idx-me.index));

                me.$slipper.wrapper.css({
                    transition: me.speed+"ms",
                    transform: "translate3d("+me.pos+"px, 0 ,0 )"
                });

                resolve();
            });
        }

        if(!opt.loop){
            if (idx < 0 || idx >= me.$slipper.len) {
                console.log("무한루프 X");
                console.log("맨처음 or 맨끝");
            }else{
                move().then(function () {
                    me.index = idx;
                    console.log(me);
                });
            }
        }else {
            move().then(function () {
                if (idx < 0 || idx >= me.$slipper.len) {
                    console.log("무한루프 O");
                    console.log("맨처음 or 맨끝");
                    var gotoIdx;
                    if (idx < 0) {
                        gotoIdx = me.$slipper.len - 1;
                    } else {
                        gotoIdx = 0;
                    }

                    setTimeout(function () {
                        me.pos = me.pos - (me.width * (gotoIdx - me.index));
                        me.$slipper.wrapper.css({
                            transition: "none",
                            transform: "translate3d(" + me.pos + "px, 0 ,0 )"
                        });
                        me.index = gotoIdx;
                    }, 300);
                    console.log(me.index);
                } else {
                    console.log("중간부");
                }

            }).then(function () {
                me.index = idx;
                console.log(me);
            });
        }
    };

    me.next = function(){
        me.move(me.index+1);
        // me.move(me.index+1);
    };
    me.prev = function(){
        me.move(me.index - 1);
    };


    init().then(function () {
        setTimeout(function(){
            me.$slipper.container.css({
                opacity:"1"
            })
        },me.speed+500)
    });


    console.log(me);

    return me;
}