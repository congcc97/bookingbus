document.addEventListener('DOMContentLoaded', function() {

    var denChonGhe = document.getElementById('btn-muave');
    var chonghe = document.getElementById('chonghe');
    var chontuyen = document.getElementById('chontuyen');
    var thongtinkhachhang = document.getElementById('thong-tin-khach-hang');

    denChonGhe.onclick = function() {
        chonghe.classList.add('showchonghe');
        chontuyen.classList.add('hidechontuyen');
    }

    var quaylaichontuyen = document.getElementById('quaylaichontuyen');

    quaylaichontuyen.onclick = function() {
        chontuyen.classList.remove('hidechontuyen');
        chonghe.classList.remove('showchonghe');
    }

    var denthongtin = document.getElementById('denthongtin');
    denthongtin.onclick = function() {
        thongtinkhachhang.classList.remove('hide-thong-tin-khach-hang');
        chonghe.classList.remove('showchonghe');
    }

    var quaylaichonghe = document.getElementById('quaylaichonghe');
    quaylaichonghe.onclick = function() {
        chonghe.classList.add('showchonghe');
        thongtinkhachhang.classList.add('hide-thong-tin-khach-hang');
    }


    var thanhtoan = document.getElementById('thanhtoan');
    var denthanhtoan = document.getElementById('denthanhtoan');
    denthanhtoan.onclick = function() {
        thanhtoan.classList.remove('hidethanhtoan');
        thongtinkhachhang.classList.add('hide-thong-tin-khach-hang');
    }

    var quaylaithongtin = document.getElementById('quaylaithongtin');
    quaylaithongtin.onclick = function() {
        thanhtoan.classList.add('hidethanhtoan');
        thongtinkhachhang.classList.remove('hide-thong-tin-khach-hang');
    }

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
