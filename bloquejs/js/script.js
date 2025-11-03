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

    let porcentajeBase;

    switch (cobertura){
        case 'basica':
            porcentajeBase = 0.02;
            break;
        case 'intermedia':
            porcentajeBase = 0.03;
            break;
        case 'premium':
            porcentajeBase = 0.04;
            break;
    }

    let primaBase = valor * porcentajeBase;

    if(edad < 25){
        primaBase *= 1.25;
    }else if(edad > 60){
        primaBase *= 1.15; 
    }

    if(licencia < 2){
        primaBase *= 1.20;
    }else if(licencia > 10){
        primaBase *= 0.95; 
    }

    for(let i = 0; i < siniestros; i++){
        primaBase *= 1.10;
    }

    let antiguedad = anioActual - anio;

    while(antiguedad > 10){
        primaBase *= 1.05;
        antiguedad -= 10;
    }

    let primaFinal;

    do{
        primaFinal = Math.round(primaBase * 100) / 100;
    }while(false);

    resultadoDiv.innerHTML = `
            <h3>Resultado de la cotización</h3>
            <p><strong>Marca:</strong>${marca}</p>
            <p><strong>Modelo:</strong>${modelo}</p>
            <p><strong>Año:</strong>${anio}</p>
            <p><strong>Cobertura:</strong>${cobertura.toUpperCase()}</p>
            <p><strong>Valor del vehículo:</strong>USD ${valor.toLocaleString()}</p>
            <hr>
            <h2 style="color: #007bff">Prima estimada: USD ${primaFinal.toLocaleString()}</h2>
            <p style="font-size: 13px; color: #555">*Esta es una cotización estimada. El valor puede variar según la compañia aseguradora.</p>
    `
    
})










