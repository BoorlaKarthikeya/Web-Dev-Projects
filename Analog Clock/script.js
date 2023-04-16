setInterval(() =>{
    const d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    document.getElementById('hr').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('min').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('sec').style.transform = `rotate(${srotation}deg)`;
    let t = ""
    t += htime + " : " + mtime + " : " + stime ;
    console.log( t);
    document.getElementById('time').innerHTML = t;
},1000);