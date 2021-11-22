function slipper(wrapperId, option){
    var me = this;
    var opt = $.extend({
        initIdx: 0, // 시작 인덱스 (범위 벗어날 경우 0번으로세팅
        speed:500, // 슬라이딩 속도
        loop:true, // 무한루프 사용여부
        autoPlay:false, // 자동모드
        pagination:"dot", // dot, number, progressbar
        initSlipper:function () { // 슬라이더 시작 콜백
            console.log("init");
        }

    },option);

    me = {
        $slipper:{
            container:$(wrapperId),  // 컨테이너 최상단 껍데기
            wrapper:$(wrapperId).find(".slipper-wrapper"), // translate 움직이는 중간 껍데기
            items:$(wrapperId).find(".slipper-item"), // 슬라이드 요소
            nextBtn: $(wrapperId).find(".slipper-btns-next"), // 다음 버튼
            prevBtn: $(wrapperId).find(".slipper-btns-prev"), // 이전 버튼
            pagination: $(wrapperId).find(".slipper-pagination"), // 페이징
            len: $(wrapperId).find(".slipper-item").length, // 슬라이드 갯수
            state:"", // slipper의 상태값. ready, moveStart, moveEnd
            interval:"" // 인터벌 변수
        },
        index: opt.initIdx,  // 현재 인덱스
        prevIndex:0, //이전 인덱스
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

            var aaa="";
            for(var i=0; i<me.$slipper.len; i++){
                var on = "";
                if(i==me.index){
                    on="-on"
                }
                aaa+="<div class='slipper-pagination-dot "+on+ "'  >"+(i+1)+"</div>"
            };

            me.$slipper.pagination.append(aaa);

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
        console.log("!!!!!!!! move::::::::",me.$slipper.state);
        if(me.$slipper.state === "moveStart") return false;

        moveInit();

        function move() {
            me.$slipper.state = "moveStart";
            return new Promise(function (resolve,reject) {
                console.log(me.$slipper.state)
                me.pos = me.pos - (me.width * (idx-me.index));

                me.$slipper.wrapper.css({
                    transition: me.speed+"ms",
                    transform: "translate3d("+me.pos+"px, 0 ,0 )"
                });

                setTimeout(function () {
                    me.index = idx;
                    me.$slipper.state = "moveEnd";

                },me.speed);

                resolve();
            })
        }

        function moveInit() {
            if(!opt.loop){
                if (idx < 0 || idx >= me.$slipper.len) {
                    console.log("무한루프 X");
                    console.log("맨처음 or 맨끝");
                }else{
                    move();
                    me.$slipper.pagination.find(".slipper-pagination-dot").removeClass("-on");
                    me.$slipper.pagination.find(".slipper-pagination-dot").eq(idx).addClass("-on");
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

                        me.$slipper.pagination.find(".slipper-pagination-dot").removeClass("-on");
                        me.$slipper.pagination.find(".slipper-pagination-dot").eq(gotoIdx).addClass("-on");

                        setTimeout(function () {
                            me.pos = me.pos - (me.width * (gotoIdx - me.index));
                            me.$slipper.wrapper.css({
                                transition: "none",
                                transform: "translate3d(" + me.pos + "px, 0 ,0 )"
                            });
                            me.index = gotoIdx;
                        }, me.speed);
                        console.log(me.index);
                    } else {
                        console.log("중간부");
                        me.$slipper.pagination.find(".slipper-pagination-dot").removeClass("-on");
                        me.$slipper.pagination.find(".slipper-pagination-dot").eq(idx).addClass("-on");
                    }
                });
            }
        }

    };

    me.next = function(){
        me.move(me.index+1);
        if(opt.autoPlay) {
            interval.restart();
        }
    };
    me.prev = function(){
        me.move(me.index - 1);
        if(opt.autoPlay) {
            interval.restart();
        }

    };


    /* slipper 시작 */
    init().then(async function () {
        await opt.initSlipper(); // 슬라이더 시작 콜백
        me.$slipper.state = "ready"; // 슬라이더 준비상태
        console.log(me.$slipper.state);


        await setTimeout(function(){
            me.$slipper.container.css({
                opacity:"1"
            })
        },200);


        if(opt.autoPlay){
            interval.start();
        }
    });

    
    /*인터벌*/
    const interval ={
        start: function() {
            me.$slipper.interval = setInterval(function () {
                me.move(me.index + 1);
            }, me.speed + 1000)
        },
        stop:function () {
            clearInterval(me.$slipper.interval);
        },

        restart:function () {
            interval.stop();
            setTimeout(function () {
                interval.start();
            },me.speed);
        }

    };


    console.log(me);

    return me;
}