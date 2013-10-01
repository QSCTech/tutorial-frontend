var interval, timeout, count, start;

count = 0;

start = (new Date()).getTime();

var log = function(msg) {
    var now = (new Date()).getTime();
    var seconds = parseInt((now - start)/ 1000);
    console.log(seconds+"秒: "+msg);
}

// 这是一个要执行5s的函数
interval = function() {

    var fnStart, now;

    count += 1;
    log("Interval:"+count);

    fnStart = (new Date()).getTime()
    while(true) {
        now = (new Date()).getTime()
        if(now - fnStart > 5000) {
            return;
        }
    }
}
var intervalID = setInterval(interval, 1000);

timeout = function() {
    log("Timeout");
    clearInterval(intervalID);
}
setTimeout(timeout, 5000);


///////////////////////////////
//
// 运行结果
//
///////////////////////////////

// 1秒: Interval:1
// 6秒: Interval:2
// 11秒: Timeout

///////////////////////////////
//
// 结论
//
///////////////////////////////

// - Interval只在空闲时才可能被执行
// - 如果队列中已有 Interval 则后面再 push 进来的 Interval 会被 Drop 掉
//   否则运行结果

//     1: 空闲
//        Interval:1
//     2: 循环中
//        append interval 2
//     3: 循环中
//        append interval 3
//     4: 循环中
//        append interval 4
//     5: 循环中
//        append interval 5
//     6: 空闲
//        append interval 6
//        Interval:2

//    那么应该是至少先执行 interval3, 4 再timeout
//    所以 interval 是会被 drop 的
