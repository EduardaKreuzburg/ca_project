const raiz = document.querySelector(".raiz");
const left_button = document.querySelector(".seta_left");
const right_button = document.querySelector(".seta_right");

const centrals = document.querySelectorAll(".central");

var pos = 1;

// centrals[0].style = "display: none";
// centrals[1].style = "display: none";

function mover(mv_bt) {
    let pos_x = "-25%";
    let button_display = "flex";
    let central_display = "flex";

    if (mv_bt==0) {
        if (pos==1) {
            raiz.style = "transition: transform 1500ms; transform: translateX(0%)";
            left_button.style = "display: none";
            centrals[0].style = "transition: transform 1500ms; transform: translateX(0%);";
            pos=0;
        }else if (pos==2) {
            raiz.style = "transition: transform 1500ms; transform: translateX(-25%)";
            right_button.style = "display: flex";
            centrals[1].style = "transition: transform 1500ms; transform: translateX(100%);";
            pos=1;
        }
    }else if(mv_bt==1){
        if (pos==1) {
            raiz.style = "transition: transform 1500ms; transform: translateX(-50%)";
            right_button.style = "display: none";
            centrals[1].style = "transition: transform 1500ms; transform: translateX(0%);";
            pos = 2;
        }else if(pos==0){
            raiz.style = "transition: transform 1500ms; transform: translateX(-25%)";
            left_button.style = "display: flex";
            centrals[0].style = "transition: transform 1500ms; transform: translateX(-100%);";
            pos = 1;
        }
    }
}
