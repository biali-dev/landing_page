AOS.init();

const dataEvento = new Date("Feb 20, 2025 12:00:00");
const timeStampEvento = dataEvento.getTime();

const contHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStampAtual

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(tempoAteEvento / (diasEmMs));
    const horasAteEvento = Math.floor(tempoAteEvento % (diasEmMs) / (horaEmMs));
    const minAteEvento = Math.floor(tempoAteEvento % (horaEmMs) / (minEmMs));
    const segAteEvento = Math.floor((tempoAteEvento % minEmMs) / 1000)
    
    document.getElementById('cont_clock').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`;

    if (tempoAteEvento < 0) {
        clearInterval(contHoras);
        document.getElementById('cont_clock').innerHTML = 'Evento expirado'
    }
}, 1000);