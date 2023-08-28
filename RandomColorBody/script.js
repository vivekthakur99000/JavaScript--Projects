const randomColor = () =>{
        const hex = "123456789ABCDEF";
        let color = '#'
        for(i=0;i<6;i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
};
let intervalId;
const changerColor = document.getElementById('start').addEventListener('click', ()=>{
    if(!intervalId)
     intervalId = setInterval(()=>{
        document.body.style.backgroundColor = randomColor();
    },3000)
})

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId =null;
})

