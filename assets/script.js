async function iniciar(){
    const horas = document.querySelector("#horas");
    const minutos = document.querySelector("#minutos");
    const segundos = document.querySelector("#segundos");
    const count = document.querySelector("#count");
    const button = document.querySelector("#button");
    const time = ((Number(segundos.value)) + (Number(minutos.value * 60)) + (Number(horas.value * 3600)));

    button.setAttribute("disabled", "disabled");
    horas.value = "";
    minutos.value = "";
    segundos.value = "";

    for (let i = time; i >= 0; i--){

        await new Promise((resolve) => 
        setTimeout(() => resolve(), 1000)
        )
            .then (count.innerText = plotTime(i));
    }
    horas.value = "";
    minutos.value = "";
    segundos.value = "";
    button.removeAttribute("disabled", "disabled");
}

function plotTime(numSeconds){
    const seconds = Number(numSeconds);

    const hour = parseInt(seconds / 3600);
    const restHour = parseInt(seconds % 3600);

    const minutes = parseInt(restHour / 60);
    const restMinutes = parseInt(seconds % 60);

    let clockHour = hour.toString();
    let clockMinute = minutes.toString();
    let clockSecond = restMinutes.toString();

    if(clockHour.length == 1){
        clockHour = "0" + clockHour;
    }
    if(clockMinute.length == 1){
        clockMinute = "0" + clockMinute;
    }
    if(clockSecond.length == 1){
        clockSecond = "0" + clockSecond;
    }

    return(`${clockHour}:${clockMinute}:${clockSecond}`);
}