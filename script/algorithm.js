//note: 2 hàm random chưa fix th random ra các điểm và các cạnh trùng lặp

var MIN = -15;
var MAX = 15;
var MAX_POINT = 20;

// mảng lưu tọa độ các điểm
// point[i][1] là tọa độ x của điểm i
// point[i][2] là tọa độ y của điểm i
var point = new Array;
for(var i=0; i<MAX_POINT; i++) {
    point[i] = new Array;
}
// matrix lưu các cạnh của đồ thị
var graph = new Array;
for(var i=0; i<MAX_POINT; i++) {
    graph[i] = new Array;
}
/*
*   Hàm ramdom 1 số point trong khoảng MIN MAX của đồ thị
*
*/
var randomPoint = function(num) {
    for(var i=0; i<num; i++) {
        point[i][1] = MAX- Math.floor(Math.random() * (MAX-MIN));
        point[i][2] = MAX- Math.floor(Math.random() * (MAX-MIN));
        creatPoint(point[i][1], point[i][2]);
    }
}

/*
*   Hàm ramdom 1 số edge. 
*   num: số cạnh muốn tạo
*   numOfPoint: số lượng điểm hiện có
*/
var randomEdge = function(num, numOfPoint) {
    for(var i=0; i<num; i++) {
        var p1 = Math.floor(Math.random() * numOfPoint);
        var p2 = Math.floor(Math.random() * numOfPoint);
        graph[p1][p2] = 1;
        creatEdge(point[p1][1],point[p1][2],point[p2][1], point[p2][2]);
    }
}
randomPoint(10);
randomEdge(5, 10);