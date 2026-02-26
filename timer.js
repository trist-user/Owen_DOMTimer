
strt = document.getElementById("startTimer");
stp = document.getElementById("stopTimer");
rst = document.getElementById("resetTimer");

let timer = document.createElement("h2");
timer.innerHTML = 0;
document.body.appendChild(timer);

strt.addEventListener("click",function(){
    console.log("yipppeeee")
    let timeMover = setInterval(adder, 1000);
    function adder(){
        stp.addEventListener("click",() =>{
        clearInterval(timeMover)
        })
        timer.innerHTML++
    }
})

rst.addEventListener("click", function(){
    timer.innerHTML = 0
})