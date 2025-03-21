AOS.init();

const dataDoEvento = new Date("May 20, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    const SegundosEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / SegundosEmMs)   

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento} ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);