var kontis = document.querySelector('.odbrojavanje');
var h1 = document.querySelector('.col-8 h1');
var slika = document.querySelector('.slika img');
var godinaIz
var mesecIz
var danIz
var dugme = document.querySelector('button');
var sati
var minuti
var sekunde
var satiOd
var minutiOd
var sekundeOd
var dan = 1000*60*60*24;
var odbrojavanje 

dugme.addEventListener('click', brojac)

function brojac() {

    clearInterval(loop)
    godinaIz = document.querySelector('#godina');
    mesecIz = document.querySelector('#mesec');
    danIz = document.querySelector('#dan');
    
    switch(mesec.value) {
        case 'Januar':
        case 'januar':
            mesec.value = 0;
            break;
        case 'Februar':
        case 'februar':
            mesec.value = 1;
            break;
        case 'Mart':
        case 'mart':
            mesec.value = 2;
            break;
        case 'April':
        case 'april':
            mesec.value = 3;
            break;
        case 'Maj':
        case 'maj':
            mesec.value = 4;
            break;
        case 'Jun':
        case 'jun':
            mesec.value = 5;
            break;
        case 'Jul':
        case 'jul':
            mesec.value = 6;
            break;
        case 'Avgust':
        case 'avgust':
            mesec.value = 7;
            break;
        case 'Septembar':
        case 'septembar':
            mesec.value = 8;
            break;
        case 'Oktobar':
        case 'oktobar':
            mesec.value = 9;
            break;
        case 'Novembar':
        case 'novembar':
            mesec.value = 10;
            break;
        case 'Decembar':
        case 'decembar':
            mesec.value = 11;
            break;
        default:
            break;
    };
    var date = new Date();
    odbrojavanje = new Date(Number(godinaIz.value), Number(mesecIz.value), Number(danIz.value));
    var loop = setInterval (()=>{
        date = new Date()
        sati = date.getHours();
        minuti = date.getMinutes();
        sekunde = date.getSeconds();
        satiOd = 23 - sati;
        minutiOd = 59 - minuti;
        sekundeOd = 59 - sekunde;
        dan = 1000*60*60*24;
        kontis.innerHTML = `${Math.floor((odbrojavanje - date)/dan)}д: ${satiOd}ч: ${minutiOd}м: ${sekundeOd}с`;
        if((Math.floor((odbrojavanje - date)/dan)) == '0' && satiOd == '0' && minutiOd == '0' & sekundeOd == '0') {
           h1.innerHTML ='Дочекали сте!';
        }
    },1000);

    godinaIz.value = ''
    mesecIz.value = ''
    danIz.value = ''
    godinaIz.focus()
}

