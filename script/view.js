var MIN = -15;
var MAX = 15;
/*
*   Hàm này để kẻ hệ tọa độ oxy
*   
*   
*/
var creatMainView = function() {
    var c = document.getElementById("grid");
    var ctx = c.getContext("2d");
    // kẻ lưới
    ctx.strokeStyle="#dee5ef";
    var iMAX = MAX-MIN;
    for(var i=MIN; i<iMAX; i++) {
        ctx.moveTo(30*i,0);
        ctx.lineTo(30*i,6000);
        ctx.stroke();
    }
    for(var i=MIN; i<iMAX; i++) {
        ctx.moveTo(0,30*i);
        ctx.lineTo(6000,30*i);
        ctx.stroke();
    }
    
    // kẻ trục ox oy
    var c2 = document.getElementById("oxy");
    var ctx2 = c2.getContext("2d");
    ctx2.strokeStyle="#000000";
    var mid = (MIN + MAX)/2;
    ctx2.moveTo(0,(MAX-mid)*30);
    ctx2.lineTo(6000,(MAX-mid)*30);
    ctx2.stroke();
    ctx2.moveTo((MAX-mid)*30,0);
    ctx2.lineTo((MAX-mid)*30,6000);
    ctx2.stroke();
    
    // vẽ các số trên trục tọa độ
    for(var i=MIN; i<MAX; i++) {
        ctx2.strokeText(-i, 30*(MAX-i),(MAX-mid)*30 - 3);
    }
    for(var i=MIN; i<MAX; i++) {
        if(i==0) continue;
        ctx2.strokeText(i, (MAX-mid)*30 +6,30*(MAX-i));
    }
}

/*
*   Hàm này dùng để vẽ điểm
*   MIN MAX là kích thước hệ tọa độ 
*   x y là tọa độ điểm cần vẽ
*/
var creatPoint = function(x, y) {
    var c2 = document.getElementById("pointEdge");
    var ctx2 = c2.getContext("2d");
    ctx2.strokeStyle="#dd004d";
    ctx2.beginPath();
    var mid = (MIN + MAX)/2;
    mid = MAX-mid;
    ctx2.arc(30*(mid+x), 30*(mid-y), 3, 0, 2 * Math.PI);
    ctx2.stroke();
}
/*
*   Hàm này dùng để vẽ đoạn thẳng
*   x1 y1 x2 y2 là tọa độ 2 đầu 
*   
*/
var creatEdge = function(x1, y1, x2, y2) {
    var c2 = document.getElementById("pointEdge");
    var ctx2 = c2.getContext("2d");
    ctx2.strokeStyle="#080c89";
    var mid = (MIN + MAX)/2;
    mid = MAX-mid;
    ctx2.moveTo(30*(mid+x1), 30*(mid-y1));
    ctx2.lineTo(30*(mid+x2), 30*(mid-y2));
    ctx2.stroke();
}











creatMainView();