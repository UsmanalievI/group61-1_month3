const titleElement=document.querySelector(".bigWord");

const color=prompt("Пожалуйста введите цвет фона");

titleElement.innerText= "Фон изменён на " + color ;

if(
    color==="red" ||
    color==="green" ||
    color==="blue" ||
    color==="purple" ||
    color==="aquamarine"
){
    document.body.style.backgroundColor= color;
}else{
    alert("Этот цвет не предусмотрен в логике, введите другой корректный цвет. Например red, green, blue, purple или aquamarine")
}

//svetofor

const btn=document.querySelector(".btn");
const resetBtn=document.querySelector(".reset")
const light=document.querySelector(".lightText");
const red=document.querySelector(".red");
const yellow=document.querySelector(".yellow");
const green=document.querySelector(".green");

const changeLight=()=>{
    const colorLight=light.value.toLowerCase();

    if(colorLight==="red"){
        red.style.backgroundColor=colorLight;
        red.innerText="STOP";
    }else if(colorLight==="yellow"){
        yellow.style.backgroundColor=colorLight;
        yellow.innerText="WAIT";
    }else if(colorLight==="green"){
        green.style.backgroundColor=colorLight;
        green.innerText="GO!";
    }else{
        alert("введен неправильный цвет, правописание цветов red, yellow и green")
    }
}
const resetLight=()=>{
    red.style.backgroundColor="gray";
    yellow.style.backgroundColor="gray";
    green.style.backgroundColor="gray";
}

btn.addEventListener("click", changeLight);
resetBtn.addEventListener("click", resetLight);