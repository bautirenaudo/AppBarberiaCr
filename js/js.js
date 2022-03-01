(function () {
    /* window.onbeforeunload = function() {
      return "¿Estás seguro que deseas salir de la actual página?"
  }*/

    const daysConatiners = document.querySelectorAll(".day");
    const fragment = document.createDocumentFragment();
    let date = new Date(); let newDate = date.toLocaleString("en-ES", { timeZone: "America/Buenos_Aires" });
    newDate = newDate.split(",").splice(0, 1).toString().split("/"); getDay = date.getDay();

    let arrayDays = ["", "Lun", "Ma", "Mie", "Jue", "Vie", "Sab", "Dom",]

    daysConatiners.forEach((e, i) => {
        //console.log(date);         
        //console.log(newDate);   

        const li = document.createElement("li");
        const span = document.createElement("b");

        span.textContent = newDate[1] + "/" + newDate[0];
        li.textContent = arrayDays[getDay] + " ";
        li.append(span); document.querySelector(".menu").append(li);

        date.setDate(date.getDate() + 1);
        newDate = date.toLocaleString("en-ES", { timeZone: "America/Buenos_Aires" });
        newDate = newDate.split(",").splice(0, 1).toString().split("/");
        getDay = date.getDate();
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
        li.addEventListener("click", () => {
            document.querySelector(".conteiner-turnos").style.cssText = "transform: translateX(0%);";

            document.querySelector(".conteiner-home").style.cssText = "transform: translateX(-100%);";
        })
    })

    document.querySelector(".back-button").addEventListener("click", () => {
        document.querySelector(".conteiner-home").style.cssText = "transform: translateX(0%);";

        document.querySelector(".conteiner-turnos").style.cssText = "transform: translateX(100%);";
    })



    //crear turnos
    const select = document.createElement("select");
    for (let i = 0, j = 0, k = 0; i < 40; i++) {
        const option = document.createElement("option");

        if (i % 4 == 0) {
            hour = 10 + k;
            k++;
        }


        let minute = j;
        if (minute == 0) {
            minute += "0"
        }

        const turno = hour + ":" + minute;
        option.textContent = turno;

        select.append(option)

        if (j == 45) {
            j = 0
        }
        else {
            j += 15
        }
    }
    //


}())