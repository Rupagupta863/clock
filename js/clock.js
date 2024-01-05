setInterval(() => {
    let date=new Date();
    let h=date.getHours()*30;
    let m=date.getMinutes()*6;
    let s=date.getSeconds()*6;
    document.getElementById('hr').style.transform=`rotateZ(${h+(m/12)}deg)`;
    document.getElementById('mn').style.transform=`rotateZ(${m}deg)`;
    document.getElementById('sc').style.transform=`rotateZ(${s}deg)`;
});