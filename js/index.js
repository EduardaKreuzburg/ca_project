const raiz = document.querySelector(".raiz");
const left_button = document.querySelector(".seta_left");
const right_button = document.querySelector(".seta_right");

const centrals = document.querySelectorAll(".central");

var pos = 1;

function mover(mv_bt) {

    if (mv_bt==0) {
        if (pos==1) {
            raiz.style = "transition: transform 1500ms; transform: translateX(0%)";
            left_button.style = "display: none";
            centrals[0].style = "transition: transform 1500ms; transform: translateX(0%);";
            centrals[0].children[0].setAttribute('autoplay', 'true');
            centrals[0].children[0].setAttribute('loop', 'true');
            centrals[0].children[0].play();
            
            pos=0;
        }else if (pos==2) {
            raiz.style = "transition: transform 1500ms; transform: translateX(-25%)";
            right_button.style = "display: flex";
            centrals[1].style = "transition: transform 1500ms; transform: translateX(100%);";

            centrals[1].children[0].setAttribute('autoplay', 'false');
            centrals[1].children[0].setAttribute('loop', 'false');
            centrals[1].children[0].pause();

            pos=1;
        }
    }else if(mv_bt==1){
        if (pos==1) {
            raiz.style = "transition: transform 1500ms; transform: translateX(-50%)";
            right_button.style = "display: none";
            centrals[1].style = "transition: transform 1500ms; transform: translateX(0%);";

            centrals[1].children[0].setAttribute('autoplay', 'true');
            centrals[1].children[0].setAttribute('loop', 'true');
            centrals[1].children[0].play();

            pos = 2;
        }else if(pos==0){
            raiz.style = "transition: transform 1500ms; transform: translateX(-25%)";
            left_button.style = "display: flex";
            centrals[0].style = "transition: transform 1500ms; transform: translateX(-100%);";

            centrals[0].children[0].setAttribute('autoplay', 'false');
            centrals[0].children[0].setAttribute('loop', 'false');
            centrals[0].children[0].pause();

            pos = 1;
        }
    }
}

function changeMainProduct(event, main_central){
    let img_src = event.target.attributes.src.nodeValue;//trocar terminação ainda...
    let title = event.target.nextElementSibling.children[0].innerHTML;
    let info = event.target.nextElementSibling.children[1].innerHTML;
    let time = event.target.nextElementSibling.children[2].innerHTML;
    
    let listImgSrc = (img_src.split('.'));

    img_src = `.${listImgSrc[1]}.mp4`;
    img_src = img_src.replace('img', 'video');
    // console.log(img_src);

    centrals[main_central].children[0].attributes.src.nodeValue = img_src; //endereço de vídeo a ser trocado
    centrals[main_central].children[1].children[0].children[0].innerHTML = title; //titulo a ser alterado
    centrals[main_central].children[1].children[0].children[1].innerHTML = info; //informação a ser alterada
    centrals[main_central].children[1].children[1].children[0].innerHTML = time; //informação do time

    // console.log(main_central);
}
