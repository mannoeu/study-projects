const cores = [
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)'
];
function trocaCor(){
    var sorteio = Math.floor(Math.random() * cores.length);
    document.querySelector('.item').style.backgroundImage = cores[sorteio];
}

document.querySelector('.sub2').addEventListener('click',trocaCor);