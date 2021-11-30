function slipper(wrapperId, option){
    var me = this;
    var opt = $.extend({
        initIdx: 0, // 시작 인덱스 (범위 벗어날 경우 0번으로세팅
        speed:300, // 슬라이딩 속도
        loop:true, // 무한루프 사용여부
        autoPlay:false, // 자동모드
        delay:3000, // 자동모드시 다음페이지로 대기시간
        pagination:"dot", // dot, number, progressbar
        initSlipper:function () { // 슬라이더 시작 콜백
            console.log("init");
        },
        transitionEnd:function () { // 슬라이드 transition 종료시 콜백
            console.log("transitionEnd");
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
        speed:opt.speed, // 슬라이딩 속도
        delay:opt.delay, // 무한루프시 다음페이지로 대기시간
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

            me.$slipper.pagination.addClass("-"+opt.pagination);
            me.$slipper.pagination.append(aaa);

            if(opt.loop){ //무한루프일때 clone 생성
                var $cloneFirstItem = $firstItem.clone().addClass("-cloneItem");
                var $cloneLastItem = $lastItem.clone().addClass("-cloneItem");

                //clone item 세팅
                $firstItem.before($cloneLastItem);
                $lastItem.after($cloneFirstItem);
            }else{ //무한루프아닐때 버튼 활성화체크
                btnCheck(me.index);
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

    // 이전/다음 버튼 활성화/비활성화
    function btnCheck(idx){
        if(idx<=0){
            me.$slipper.prevBtn.addClass("-disabled");
        }else if(idx>=me.$slipper.len-1){
            me.$slipper.nextBtn.addClass("-disabled");
        }else{
            me.$slipper.prevBtn.removeClass("-disabled");
            me.$slipper.nextBtn.removeClass("-disabled");
        }
    }

    me.move = function(idx){
        if(me.$slipper.state === "moveStart") {
            return false;
        }
        moveInit();

        function moveInit() {
            return new Promise(function (resolve,reject) {

                function moveBasic(gotoIndex){
                    me.$slipper.state = "moveStart"; // 상태값 변경 moveStart
                    me.pos = me.pos - (me.width * (idx-me.index)); // transition 범위 계산

                    me.$slipper.wrapper.css({
                        transition: me.speed+"ms",
                        transform: "translate3d("+me.pos+"px, 0 ,0 )"
                    });

                    setTimeout(function () {
                        me.index = idx;
                        me.$slipper.state = "moveEnd"; // 상태값 변경 moveEnd
                        opt.transitionEnd(); // 슬라이더 transitionEnd 콜백

                    },me.speed);

                }

                // page dot 온
                function pageDotCheck (gotoIndex){
                    me.$slipper.pagination.find(".slipper-pagination-dot").removeClass("-on");
                    me.$slipper.pagination.find(".slipper-pagination-dot").eq(gotoIndex).addClass("-on");
                }


                if (idx < 0 || idx >= me.$slipper.len) { // 맨처음, 끝 체크
                    if(opt.loop){ // 무한루프일 경우
                        moveBasic();
                        var gotoIdx;
                        if (idx < 0) {
                            gotoIdx = me.$slipper.len - 1;
                        } else {
                            gotoIdx = 0;
                        }
                        pageDotCheck(gotoIdx);


                        setTimeout(function () {
                            me.pos = me.pos - (me.width * (gotoIdx - me.index));
                            me.$slipper.wrapper.css({
                                transition: "none",
                                transform: "translate3d(" + me.pos + "px, 0 ,0 )"
                            });
                            me.index = gotoIdx;
                        }, me.speed);

                    }else{
                        return false;
                    }
                }else{ // 중간부
                    moveBasic();
                    pageDotCheck(idx);
                    if(!opt.loop){
                        btnCheck(idx);
                    }
                }
                resolve();
            })
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
            }, me.delay)
        },
        stop:function () {
            clearInterval(me.$slipper.interval);
        },

        restart:function () {
            interval.stop();
            interval.start();
            // setTimeout(function () {
            // },me.speed);
        }

    };

    return me;
}