 function showTime() {
     var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();
     var session;
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;
     var time = h + " : " + m + " : " + s + " ";
    
     document.getElementsByTagName('h1')[0].innerText = time;
     setTimeout(showTime,1000); // it  will refresh page after every 1000 miliseconds
     
 }
