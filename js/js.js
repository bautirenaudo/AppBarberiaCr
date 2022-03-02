(function () {
    /* window.onbeforeunload = function() {
      return "¿Estás seguro que deseas salir de la actual página?"
  }*/

    const daysConatiners = document.querySelectorAll(".day");
    const fragment = document.createDocumentFragment();
    let date = new Date(); let newDate = date.toLocaleString("en-ES", { timeZone: "America/Buenos_Aires" });
    newDate = newDate.split(",").splice(0, 1).toString().split("/");
    getDay = date.getDay();

    let arrayDays = ["Dom", "Lun", "Ma", "Mie", "Jue", "Vie", "Sab"]

    daysConatiners.forEach((e, i) => {
        const li = document.createElement("li");
        const span = document.createElement("b");

        span.textContent = newDate[1] + "/" + newDate[0];
        li.textContent = arrayDays[getDay] + " ";

        const liId = arrayDays[getDay];
        const spanId = newDate[1] + "/" + newDate[0];

        li.id = liId;
        span.id = spanId;
        li.append(span); document.querySelector(".menu").append(li);

        date.setDate(date.getDate() + 1);
        newDate = date.toLocaleString("en-ES", { timeZone: "America/Buenos_Aires" });
        newDate = newDate.split(",").splice(0, 1).toString().split("/");
        getDay = date.getDay();
    })


    //MENU
    document.querySelector(".menu-button").addEventListener("click", () => {
        document.querySelector(".menu").style.cssText = "transform: translateX(0%);";
        document.querySelector(".close-menu").style.cssText = "transform: translateX(0%);";
    })
    document.querySelector(".close-menu").addEventListener("click", () => {
        document.querySelector(".menu").style.cssText = "transform: translateX(-100%);";
        document.querySelector(".close-menu").style.cssText = "transform: translateX(500%);";
    })


    //extras
    document.querySelectorAll(".menu li").forEach(li => {
        li.addEventListener("click", (e) => {
            e = e.target.closest("li")
            const dateSelected = e.id;
            const fecha = e.querySelector("b").id;
            document.querySelector(".dia-seleccionado").textContent = dateSelected + " " + fecha;


            document.querySelector(".conteiner-turnos").style.cssText = "transform: translateX(0%);";
            document.querySelector(".conteiner-home").style.cssText = "transform: translateX(-100%);";
        })
    })

    document.querySelector(".back-button").addEventListener("click", () => {
        document.querySelector(".conteiner-home").style.cssText = "transform: translateX(0%);";
        document.querySelector(".conteiner-turnos").style.cssText = "transform: translateX(100%);";
    })

    window.addEventListener("click",(e)=>{
        if(e.target.classList.contains("seleccionar")){
            document.querySelector(".conteiner-home").style.cssText = "transform: translateX(0%);";
            document.querySelector(".conteiner-turnos").style.display = "none";
            document.querySelector(".conteiner-con-reserva").style.display = "block";
        }
    })



    //crear turnos
    for (let i = 0, j = 0, k = 0; i < 40; i++) {
        if (j == 45 || j == 15) {
            if (j == 45) {
                j = 0
            }
            else {
                j += 15
            }
            continue;
        }
        const li = document.createElement("li");
        const turno = document.createElement("div");
        const seleccionarElement = document.createElement("p");
        seleccionarElement.textContent = "SELECCIONAR";
        seleccionarElement.classList.toggle("seleccionar");

        if (i % 4 == 0) {
            hour = 10 + k;
            k++;
        }


        let minute = j;
        if (minute == 0) {
            minute += "0"
        }

        turno.textContent = hour + ":" + minute;
        li.append(turno)
        li.append(seleccionarElement)

        fragment.append(li);

        if (j == 45) {
            j = 0
        }
        else {
            j += 15
        }
    }
    document.querySelector(".turnos-caja").append(fragment);
    //


}())