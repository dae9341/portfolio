var timer = {
    timer_handler : null,
    popupLayer : null,
    btn_timer : null,
    btn_close : null,
    timer_min : null,
    timer_sec : null,
    startBtn : null,
    resetBtn : null,
    startFlag : false,
    endAudio : null
};

timer.init = function () {
    var self = this;


    self.btn_timer = document.querySelector('#_timer');
    self.popupLayer = document.querySelector('#_pop_timer');
    self.btn_close = self.popupLayer.querySelector('._btn_timer_close');
    self.timer_min =  document.querySelector('#timer_min');
    self.timer_sec =  document.querySelector('#timer_sec');

    self.startBtn = self.popupLayer.querySelector('._btn_timer_start');
    self.resetBtn = self.popupLayer.querySelector('._btn_timer_reset');
    self.endAudio = new Audio('audio/timer_bell.mp3');



    try {
        self.bindEvent();
    }catch (e){
        console.error('timer bindEvent error :' , e);
    }
};

timer.startChk = function () {
    var self = this;

    if (self.timer_min.value == '00' && self.timer_sec.value == '00'){
        self.startFlag = false;
    } else{
        self.startFlag = true;
    }

};

timer.bindEvent = function () {
    var self = this;

    self.btn_timer.addEventListener('click' , function () {
        self.popupLayer.classList.add('on');
        self.popupLayer.style.transform = 'translate(-50%, -50%)';
        self.popupLayer.style.left = '50%';
        self.popupLayer.style.top = '50%';
    });

    self.btn_close.addEventListener('click',function () {
        self.popupLayer.classList.remove('on');
        self.reset();
    });

    self.startBtn.addEventListener('click',function () {
        self.startChk();

        if(self.startFlag){
            self.timer_min.readOnly = true;
            self.timer_sec.readOnly = true;
            self.start();
        }else{
            alert('시간을 입력하세요');
        }
    });

    self.resetBtn.addEventListener('click',function () {
        self.timer_min.readOnly = false;
        self.timer_sec.readOnly = false;
        self.startBtn.disabled = false;
        self.startBtn.classList.remove('clicked');
        self.reset();
        self.endAudio.pause();
    });
    
};

timer.start = function () {
    var self = this;
    self.val_toString(self.timer_min.value, self.timer_sec.value);
    self.startBtn.disabled = true;
    self.startBtn.classList.add('clicked');

    self.timer_handler = setInterval(function () {

        var min = self.timer_min.value;
        var sec = self.timer_sec.value;


        min = parseInt(min);
        sec = parseInt(sec);

        if(sec >= 60){
            min = Math.floor(sec / 60);
            sec = sec % 60 + 1;
        }

        if(sec >= 0 && sec < 60){
            sec--;
        }

        if(min > 0 && sec < 0){
            sec = 59;
            min--;
        }else if(min < 0 && sec < 0){
            sec = 0;
            min = 0;
        }


        if(sec == -1){
            sec = 0;
        }

        /* self.timer_min.value = min;
         self.timer_sec.value = sec;*/
        timer.val_toString(min, sec);

        if(min == 0 && sec == 0){
            clearInterval(timer.timer_handler);
            timer.startBtn.classList.remove('clicked');
            timer.startBtn.disabled = false;
            timer.timer_min.readOnly = false;
            timer.timer_sec.readOnly = false;
            timer.endAudio.play();
            //반짝
            $('#_pop_timer_container').addClass('blinking');

            setTimeout(function(){
                $('#_pop_timer_container').removeClass('blinking');
            }, 2100)
        }


    }, 1000);
};

timer.reset = function () {
    var self = this;
    clearInterval(self.timer_handler);
    self.timer_min.value = "00";
    self.timer_sec.value = "00";
    //반짝
    $('#_pop_timer_container').removeClass('blinking');
};


/* value 값을 string으로 변환 */
timer.val_toString = function (m, s) {
    var self = this;

    m = parseInt(m);
    s = parseInt(s);

    if(m < 10){
        m = m.toString();
        m = '0' + m;
    }else{
        m = m.toString();
    }

    if(s < 10){
        s = s.toString();
        s = '0' + s;
    }else{
        s = s.toString();
    }

    self.timer_min.value = m;
    self.timer_sec.value = s;

};

