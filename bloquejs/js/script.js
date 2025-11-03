const formulario = document.getElementById('formularioCotizacion');
const resultadoDiv = document.getElementById('resultado');
const selectAnio = document.getElementById('anio');

const anioActual = new Date().getFullYear();

for(let i = anioActual; i >= anioActual - 25; i--){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectAnio.appendChild(option);
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = parseInt(document.getElementById('anio').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const edad = parseInt(document.getElementById('edad').value);
    const licencia = parseInt(document.getElementById('licencia').value);
    const siniestros = parseInt(document.getElementById('siniestros').value);
    const cobertura = document.getElementById('cobertura').value;


    if(!marca || !modelo || !anio || !valor || !edad || isNaN(licencia)){
        alert("Por favor, complete todos los campos correctamente!")
    }
    
})










