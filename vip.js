document.addEventListener('DOMContentLoaded', function() {
    var soGheDangChon = 0;
    var ghe = document.getElementsByClassName('seat');
    var hienThiSoGhe = document.getElementById('text-confirm');
    var giaVe = 100000;
    var tongTien = document.getElementById('tongTien');
    var maGheDangChon = [];

    for (var i = ghe.length - 1; i >= 0; i--) {
        ghe[i].onclick = function() {
            this.classList.toggle('selecting');
            if (this.classList[1] == 'selecting') {
                soGheDangChon++;
                // this.getAttribute('data-maGhe');
                maGheDangChon.push(this.getAttribute('data-maGhe'))
                console.log(maGheDangChon);
            } else{
                soGheDangChon--;
                var gheBoChon = this.getAttribute('data-maGhe');
                var z = maGheDangChon.indexOf(gheBoChon);
                if (z != -1) {
                    maGheDangChon.splice(i,1);
                }
                console.log(maGheDangChon);
            }


            hienThiSoGhe.innerHTML = ("Bạn đã chọn <span style='color: red; font-weight: bold;'>"+ soGheDangChon +"</span> ghế là: <span style='color: red; font-weight: bold;'>"+ maGheDangChon.toString() +"</span>");
            tongTien.innerHTML = ("Tổng số tiền là: <span style='color: red; font-weight: bold'>("+ (giaVe * soGheDangChon).toLocaleString() +")</span> đ")
        }
    }
}, false);
