(function () {

    document.querySelector(".conteiner-sign-in .go-sign-up").addEventListener("click", () => {
        document.querySelector(".conteiner-sign-in").style.display = "none";
        document.querySelector(".conteiner-sign-up").style.display = "block";
    })

    document.querySelector(".conteiner-sign-up .go-sign-in").addEventListener("click", () => {
        document.querySelector(".conteiner-sign-in").style.display = "block";
        document.querySelector(".conteiner-sign-up").style.display = "none";
    })

    //sing in
    document.querySelector(".conteiner-sign-in form").addEventListener("submit", (e) => {
        e.preventDefault();

        const emailValue = document.querySelector(".conteiner-sign-in form .email-input").value;
        const passValue = document.querySelector(".conteiner-sign-in form .aux input").value;

        auth.signInWithEmailAndPassword(emailValue, passValue)
            .then(() => { })
            .catch(error => { alert(error) })

    })

    //sing up
    document.querySelector(".conteiner-sign-up form").addEventListener("submit", async (e) => {
        e.preventDefault();

        const emailValue = document.querySelector(".conteiner-sign-up form .email-input").value;
        const passValue = document.querySelector(".conteiner-sign-up form .aux input").value;
        const nombreValue = document.querySelector(".conteiner-sign-up form .nombre-input").value;
        const numeroValue = document.querySelector(".conteiner-sign-up form .numero-input").value;

        await fs.collection("clientes").doc(emailValue).set({
            email: emailValue,
            nombre: nombreValue,
            numero: numeroValue
        })

        auth.createUserWithEmailAndPassword(emailValue, passValue).then(() => {
            document.querySelector(".conteiner-sign-up form").reset();
        })
            .catch(error => {
                alert(error)
            })



    })






    //AUTH STATE CHANGED
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("sign in");
            /*if (user.email == "email@gmail.com") {
                window.location = "../tienda/admin/";
            } else {
                window.location = "../tienda/user/";
            }*/
            window.location = "../turno/"
        } else {
            console.log("sign out");
        }
    })

}())