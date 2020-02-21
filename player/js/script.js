// elementos
var containerElement = document.querySelector('.container');
var contentElement = document.querySelector('.conteudo');
var contentButtons = document.querySelector('.botoes');
var tempoAtual = document.querySelector('#tempo_atual');

var btnAnt = document.querySelector('#btnPrev');
var btnControl = document.querySelector('#btnControl');
var btnProx = document.querySelector('#btnProx');
var faixa = document.querySelector('#audio');
var tituloFaixa = document.querySelector('#titulo');
var artistFaixa = document.querySelector('#artist');

// variável contador
var i = 0;

// dados das faixas
var faixas = [
    { 
        mp3:'sound/01.mp3',
        titulo:'call me',
        artist: '90sFlav',
        wallpaper:"url('img/lofi.gif')"
    },
    { 
        mp3:'sound/02.mp3',
        titulo:'now that you are gone',
        artist: 'kavv',
        wallpaper:"url('img/lofi2.gif')"
    },
    { 
        mp3:'sound/03.mp3',
        titulo:'summers end',
        artist: 'biosphere',
        wallpaper:"url('img/lofi3.gif')"
    },
    { 
        mp3:'sound/04.mp3',
        titulo:'Zone',
        artist: 'Jayswan',
        wallpaper:"url('img/lofi4.gif')"
    },
    { 
        mp3:'sound/05.mp3',
        titulo:"we've never met but, can we have a coffee or something?",
        artist: 'in love with a ghost',
        wallpaper:"url('img/lofi5.gif')"
    },
    { 
        mp3:'sound/06.mp3',
        titulo:'Rainbow Chasers',
        artist: 'VINDELIC',
        wallpaper:"url('img/lofi6.gif')"
    },
    { 
        mp3:'sound/07.mp3',
        titulo:'Bell Peppers & Beef',
        artist: 'Kendall x Mukashi',
        wallpaper:"url('img/lofi7.gif')"
    },
    { 
        mp3:'sound/08.mp3',
        titulo:'Whatever happens, happens...',
        artist: 'Verzache',
        wallpaper:"url('img/lofi8.gif')"
    },
    { 
        mp3:'sound/09.mp3',
        titulo:'Christ Conscious',
        artist: 'Joey Bada$$',
        wallpaper:"url('img/lofi9.gif')"
    },
    { 
        mp3:'sound/10.mp3',
        titulo:'ON TOP',
        artist: 'the girl next door',
        wallpaper:"url('img/lofi10.gif')"
    }
];

// função play/pause
function reproducao(){
    setInterval(()=>{
        if(faixa.currentTime === faixa.duration){
            proxima();
        }
    }, 1500);
    if(btnControl.textContent === 'pause'){
        faixa.play();
        tituloFaixa.textContent = faixas[i].titulo;
        artistFaixa.textContent = faixas[i].artist;
        
    }
    else faixa.pause();
}

// proxima musica
function proxima(){
    if(i>=faixas.length){
        i = 0;
        // seleção da faixa com titulo, artista e wallpaper
        faixa.src = faixas[i].mp3;
        tituloFaixa.textContent = faixas[i].titulo;
        artistFaixa.textContent = faixas[i].artist;
        contentElement.style.background = faixas[i].wallpaper;
        btnControl.textContent = "pause";
        btnControl.value = "pause"
        faixa.play();
    }else{
        i++;
        // seleção da faixa com titulo, artista e wallpaper
        tituloFaixa.textContent = faixas[i].titulo;
        artistFaixa.textContent = faixas[i].artist;
        faixa.src = faixas[i].mp3;
        contentElement.style.background = faixas[i].wallpaper;
        btnControl.textContent = "pause";
        btnControl.value = "pause"
        faixa.play();
    }
}

// musica anterior
function anterior(){
    if(i<=faixas.length){   
        // verificando se já está tocando a primeira música da lista
        if(i>0){
            i--;
            // seleção da faixa com titulo, artista e wallpaper
            tituloFaixa.textContent = faixas[i].titulo;
            artistFaixa.textContent = faixas[i].artist;
            faixa.src = faixas[i].mp3;
            contentElement.style.background = faixas[i].wallpaper;
            btnControl.textContent = "pause";
            btnControl.value = "pause"
            faixa.play();
        }
    }else{
        i = 0;
        // seleção da faixa com titulo, artista e wallpaper
        tituloFaixa.textContent = faixas[i].titulo;
        artistFaixa.textContent = faixas[i].artist;
        faixa.src = faixas[i].mp3;
        contentElement.style.background = faixas[i].wallpaper;
        btnControl.textContent = "pause";
        btnControl.value = "pause"
        faixa.play();
    }
}

// status do botão de controle de reprodução
function troca() {
    if (btnControl.textContent === "play") {
        btnControl.textContent = "pause";
        btnControl.value = "pause"
    } else {
        btnControl.textContent = "play";
        btnControl.value = "play"
    }
}

// tempo corrido da faixa
function play_evento(){
    tempoAtual.innerHTML = secToStr(faixa.currentTime);
}

function atualizar(){
    tempoAtual.innerHTML = secToStr(faixa.currentTime);
}

function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);
     
    if (horas < 10)  
        horas = "0" + horas;
    if (minutos < 10)  
        minutos = "0" + minutos;
    if (segundos < 10) 
        segundos = "0" + segundos;  
    var tempo = horas+':'+minutos+':'+segundos;
    return tempo;
}

// eventos
faixa.addEventListener('play', play_evento , false);
faixa.addEventListener('timeupdate', atualizar , false);
btnControl.addEventListener('click', troca);
btnControl.addEventListener('click', reproducao);
btnProx.addEventListener('click', proxima);
btnAnt.addEventListener('click', anterior);