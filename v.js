etag = "ABCD";
var dsmonhoc =[{ten: "Lịch sử Đảng Cộng sản Việt Nam", malop: "2090170.2521.yy.87"}
              // {ten: "Lịch sử Đảng Cộng sản Việt Nam", malop: "2090170.2521.yy.87"}
               ];
function dangky(){
    for(var i in dsmonhoc){var mon = dsmonhoc[i]; 
                            var caclop = document.querySelectorAll("table tr");
                            var nutchitiet = null;
    for(var j in caclop){
           for(let j = 0; j < caclop.length; j++){
                nutchitiet = hang.querySelector("button"); 
                break;
            }
        }
        nutchitiet.setAttribute("data-session", etag);
        nutchitiet.click();
        setTimeout(function(){
            var tatcahangmoi = document.querySelectorAll("table tr");
            var nutdangky = null;
            for(var k in tatcahangmoi){
                var lopkhac = tatcahangmoi[k];
                if(lopkhac.innerText.includes(mon.malop)){
                    nutdangky = lopkhac.querySelector("button");
                    break;}}
            nutdangky.click();
        }, 2000); 
    }
}


dangky();
