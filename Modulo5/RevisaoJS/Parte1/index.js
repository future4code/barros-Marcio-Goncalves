
const grauNumber = Number(prompt("Digite o grau para conversão"))
const scaleTemp = prompt(`
    Escolha uma escala de para conversão:
    F = Fahrenheit
    K = Kelvin
`)


const converterFar = ()=>{
    const result = (grauNumber * 9) / 5 + 32
    return alert(`${grauNumber}°C celsius equivale a ${result}°F `)
}

const converterKelv = ()=>{
    const result = grauNumber + 273.15
    return alert(`${grauNumber}°C celsius equivale a ${result}°K `)
}

if( scaleTemp === "K"){
    converterKelv()
}
else if(scaleTemp === 'F'){
    converterFar()
}
else{
    alert("Digite uma escala válida...")
}
