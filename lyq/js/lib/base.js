(function($) {
        $.fn.dajishi = function(options) { //倒计时插件
            var _this = this,
                defaults = {
                    day_save_elemt: '.day', //存放天数
                    hour_save_elem: '.hour', //存放小时
                    minute_save_elem: '.minute', //存放分钟
                    second_save_elem: '.second', //存放秒钟
                    second_delay_save_elem: '.second_delay', //存放毫秒
                    callback: function() { //倒计时结束回调
                       $(this).html('<strong style="color:red;">活动已结束<strong>');
                    }
                },
                ops = $.extend(defaults, options);
            _this.each(function() {
                var _me = this,
                    _flag = false,
                    settime = _me.getAttribute('data-time'),
                    end_time = new Date(settime).getTime(), //月份是实际月份-1
                    //sys_second = (end_time - new Date().getTime()) / 1000, //获取总的秒数
                    day_elem = $(_me).find(ops.day_save_elemt), //存放天数
                    hour_elem = $(_me).find(ops.hour_save_elem), //存放小时
                    minute_elem = $(_me).find(ops.minute_save_elem), //存放分钟
                    second_elem = $(_me).find(ops.second_save_elem), //存放秒钟
                    second_delay_elem = $(_me).find(ops.second_delay_save_elem), //存放毫秒
                    timer = setInterval(function() {
                        var sys_second = (end_time - new Date().getTime()) / 1000; //获取总的秒数
                        if (sys_second > 1) {
                            sys_second -= 1;
                            var hour = Math.floor(sys_second / 3600),
                                minute = Math.floor((sys_second / 60) % 60),
                                second = Math.floor(sys_second % 60),
                                second_delay = Math.floor(sys_second*100%100).toString().substr(0,1);
                            hour_elem && $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时
                            minute_elem && $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟
                            second_elem && $(second_elem).text(second < 10 ? "0" + second : second); //计算秒钟
                            second_delay_elem && $(second_delay_elem).text(second_delay < 10 ? "0" + second_delay : second_delay);//存放毫秒
                        } else {
                            clearInterval(timer);
                            typeof ops.callback && ops.callback.constructor === Function && ops.callback.call(_me);
                        }
                        if (!_flag) {
                            $(_me).removeClass('hidden');
                            _flag = true;
                        }
                    }, 100);
            });
            return this;
        };
    })(jQuery);