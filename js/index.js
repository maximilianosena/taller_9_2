let texto = document.getElementById("inputText");

let btn = document.getElementById("buttonText");

let array= localStorage.getItem("Frases")?JSON.parse(localStorage.getItem("Frases")):[];

function ingresar() {
    let palabras = {
        palabra: texto.value
    }

    array.push(palabras)
}

function guardar_Texto(){
 localStorage.setItem("Frases", JSON.stringify(array))
}


function clickear(){
ingresar();
guardar_Texto();
texto.value=""
}

btn.addEventListener("click", clickear);


function obtenerInfo(){
    let info = localStorage.getItem("Frases")
    let info_parseada = JSON.parse(info)

    console.log(info_parseada)
}

obtenerInfo();