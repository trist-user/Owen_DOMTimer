
strt = document.getElementById("startTimer");
stp = document.getElementById("stopTimer");
rst = document.getElementById("resetTimer");

let timer = document.createElement("h2");
timer.innerHTML = "Timer";
document.body.appendChild(timer);

// function time(){
//     for (let i = 0; i >= 0; i++){
//         timer.innerHTML = i;
//     }
// };

// strt.addEventListener(onclick,setInterval(time(),4000));

strt.addEventListener(onclick,function(){
    setTimeout(() =>{
        for (let i = 0; i >= 0; i++){
            timer.innerHTML = i
        }
    }, 1000);
})