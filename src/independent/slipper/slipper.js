function slipper(wrapperId, option){
    var me = this;
    var opt = $.extend({
        initIdx: 4,
        speed:500,

    },option);

    me = {
        $slipper:{
            container:$(wrapperId),
            wrapper:$(wrapperId).find(".slipper-wrapper"),
            items:$(wrapperId).find(".slipper-item"),
            nextBtn: $(wrapperId).find(".slipper-btns-next"),
            prevBtn: $(wrapperId).find(".slipper-btns-prev"),
            len: $(wrapperId).find(".slipper-item").length,
        },
        index: opt.initIdx,
        width:"",
        height:"",
        pos:"",
        speed:opt.speed

    }


    const init = function(){

        return new Promise(function (resolve,reject) {

            var w = me.$slipper.items.width();
            var h = me.$slipper.items.height();
            var all_w = w * me.$slipper.len;
            var pos = (all_w - w ) /2;
            me.index = (me.index <0 || me.index>= me.$slipper.len) ? 0:me.index; // 범위를 벗어날경우 0으로 세팅해준다.
            pos = pos - (w* me.index);


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
        me.pos = me.pos - (me.width * (idx-me.index));

        me.$slipper.wrapper.css({
            transform: "translate3d("+me.pos+"px, 0 ,0 )"
        });

        me.index = idx;
        console.log(me);
    };

    me.next = function(){
        if(me.index < me.$slipper.len-1){
            me.move(me.index+1);
        }
    };
    me.prev=function(){
        if(me.index>0){
            me.move(me.index-1);
        }
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