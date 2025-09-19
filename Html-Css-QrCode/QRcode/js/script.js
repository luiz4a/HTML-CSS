//dom 

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')


//eventos 

botao.addEventListener('click', gerador)
url.addEventListener('keydown', (event)=> {
if (event.key == 'Enter') {
    gerador()
    }
})

//funções 


function gerador(){
    const texto = url.value;
    if (texto.trim()){
        qr.innerHTML = '';
        new QRCode(qr, { 
            text: texto, 
            width: 300,
            height: 300,
            colorDark: '#00000005',
            colorLight: '#110000ff'
        });
    } else {
        qr.innerHTML = '';
    }
}