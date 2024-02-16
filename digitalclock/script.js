function play()
{
    var audio= new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
    audio.play();
}
setTimeout(() => {
    play()
}, 120000);

function clock() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "AM"
    if (h == 0) {
        h = 12
    }
    else if (h > 12) {
        h = h - 12
        session = "PM"
    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    let time = h + " : " + m + " : " + s + " " + session
    document.getElementById("myclock").innerHTML = time
    setTimeout(clock, 1000)

}

clock()


notesList=document.getElementById('list')
let img=document.createElement('img')
    img.src='https://www.svgrepo.com/show/96495/delete.svg'
    img.style['width']='2vw'
    img.style['height']='2vw'

  function trash(t)
  {
       notesList.removeChild(t)
  }

function setalarm() {
    
    // let deleteButton = document.getElementById('icon')
    

    
    let date1 = document.getElementById("mydate").value;
    console.log(date1)
    comptime = new Date();
    let y = comptime.getFullYear()
    let mon = comptime.getMonth() + 1
    let d = comptime.getDate()
    mon = mon < 10 ? "0" + mon : mon
    d = d < 10 ? "0" + d : d
    let date2 = y + "-" + mon + "-" + d
    console.log(date2)

    let time1 = document.getElementById("mytime").value;
    console.log(time1)
    h = comptime.getHours()
    h = h < 10 ? "0" + h : h
    m = comptime.getMinutes()
    m = m < 10 ? "0" + m : m
    comptime = h + ":" + m

    if (date1 > date2) {
        console.log("success")
        // alert("correct timming")
        const listItem = document.createElement('li');

        listItem.textContent = time1+" on "+date1;
        notesList.appendChild(listItem);
        notesList.append(img)
        img.addEventListener('click', trash(listItem))
        


    }
    else if (date1 == date2) {
        if (time1 < comptime) {
            alert("the time has passed")
        }
        else if (time1 > comptime) {
            // alert("correct timing")
            const listItem = document.createElement('li');
            listItem.textContent = time1+" on "+date1;
            notesList.appendChild(listItem);
            notesList.append(img)
            img.addEventListener('click', trash(listItem))
        }
    }
    else if (date1 < date2) {
        alert("time has passed")
    }

}


// document.getElementById("add").addEventListener('click', setalarm)