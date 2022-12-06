let kontis = document.querySelector('.col-8')

setInterval(()=>{
    console.clear()
    let date = new Date()
    //var novagodina = new Date(date.getFullYear(), 11, 31); Nova Godina
    var godisnjica = new Date(date.getFullYear()+1, 9, 5); // godisnjica
    let sati = date.getHours()
    let minuti = date.getMinutes()
    let sekunde = date.getSeconds()
    //let dani = date.getDate()
    //let daniNg = novagodina.getDate() 
    let satiNg = 23 - sati
    let minutiNg = 59 - minuti
    let sekundeNg = 59 - sekunde
    let dan = 1000*60*60*24
    //kontis.innerHTML = `${daniNg - dani}d: ${satiNg}h: ${minutiNg}m: ${sekundeNg}s`
    kontis.innerHTML = `${Math.floor((godisnjica - date)/dan)}д: ${satiNg}ч: ${minutiNg}м: ${sekundeNg}с`
},1000)