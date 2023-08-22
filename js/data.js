let contenedor = document.getElementById("data");

let info = localStorage.getItem("Frases");

console.log(info)

let info_parseada= JSON.parse(info)

console.log(info_parseada)

function show_Text() {
    for (let texto of info_parseada){
        let oracion = texto.palabra;
        contenedor.innerHTML+= oracion + " "
    }
}

show_Text();