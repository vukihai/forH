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
    point[i][1] = 0;
    point[i][2] = 0;
}
// matrix lưu các cạnh của đồ thị
var graph = new Array;
for(var i=0; i<MAX_POINT; i++) {
    graph[i] = new Array;
    for(var j=0; j<MAX_POINT; j++) {
        graph[i][j] = 0;
    }
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
        graph[p1][p2] = Math.sqrt((point[p1][1]-point[p2][1])*(point[p1][1]-point[p2][1]) + (point[p1][2]-point[p2][2])*(point[p1][2]-point[p2][2]));
        graph[p2][p1] = graph[p1][p2];
        creatEdge(point[p1][1],point[p1][2],point[p2][1], point[p2][2]);
    }
}
/*
*   Hàm tìm đường đi và render trên đồ thị 
*   numOfPoint là số đỉnh của đồ thị
*   st, fn: điểm bắt đầu và điểm kết thúc
*
*
*/
var dijkstra = function(numOfPoint, x1, y1, x2, y2) {
    for(var i=0; i<numOfPoint; i++) {
        if(point[i][1] == x1 && point[i][2] == y1 ) start = i;
        if(point[i][1] == x2 && point[i][2] == y2 ) finish = i;
    }
    
    
    var a = start;
    var b =finish;
    var G = graph;
    var P = new Array;
    var Len = new Array;
    var S = new Array;
    var n = numOfPoint;
    var sum = 0;    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            sum += G[i][j];
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i != j && G[i][j] == 0)
                G[i][j] = sum;
        }
    }
  
    for (var i = 0; i < n; i++) {
        Len[i] = sum;       
        S[i] = 0;           
        P[i] = a;           
    }
  
    Len[a] = 0;      
  
    var i;
    while (S[b] == 0) {                 // trong khi diem cuoi chua duoc xet
        for (var i = 0; i < n; i++){          // tim 1 vi tri ma khong phai la vo cung
            if ((S[i] ==0) && (Len[i] < sum)){
                break;
            }
        }
  
        // i >=n tuc la duyet het cac dinh ma khong the tim thay dinh b -> thoat
        if (i >= n) {
            alert("không tìm được đường đi");
            return;
        }
  
        for (var j = 0; j < n; j++) {    // tim diem co vi tri ma do dai la min
            if (!S[j] && Len[i] > Len[j])
                i = j;
        }
  
        S[i] = 1;                       // cho i vao danh sach xet roi
  
        for (var j = 0; j < n; j++) {    // tinh lai do dai cua cac diem chua xet
            if (!S[j] && Len[i] + G[i][j] < Len[j]) {
                Len[j] = Len[i] + G[i][j];      // thay doi len
                P[j] = i;                       // danh dau diem truoc no
            }
        }
    }
    alert("tìm được đường đi có độ dài: " + Len[b]);
    while(start != finish) {
        boldEdge(point[finish][1],point[finish][2],point[P[finish]][1],point[P[finish]][2]);
        finish = P[finish];
    }
} 


