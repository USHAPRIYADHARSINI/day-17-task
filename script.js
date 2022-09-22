// // CALLBACK HELL COUNTDOWN

const countdown = document.querySelector(".countdown");
let num =10;
setTimeout(()=>{
    countdown.innerText = --num;
    setTimeout(()=>{
        countdown.innerText = --num;
        setTimeout(()=>{
            countdown.innerText = --num;
            setTimeout(()=>{
                countdown.innerText = --num;
                setTimeout(()=>{
                    countdown.innerText = --num;
                    setTimeout(()=>{
                        countdown.innerText = --num;
                        setTimeout(()=>{
                            countdown.innerText = --num;
                            setTimeout(()=>{
                                countdown.innerText = --num;
                                setTimeout(()=>{
                                    countdown.innerText = --num;
                                    setTimeout(()=>{
                                        countdown.innerText = "Happy Independence Day";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
