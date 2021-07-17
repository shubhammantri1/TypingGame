const container = document.getElementById('container');      
const r1 = document.getElementById('r-1');
const r2 = document.getElementById('r-2');
const r3 = document.getElementById('r-3');
const r4 = document.getElementById('r-4');
const r5 = document.getElementById('r-5');
const tvCount = document.getElementById('textView');
const play = document.getElementById('play');
const refresh = document.getElementById('refresh');

var count = 0;
var arr = [0,0,0,0,0];
var maxCount = 0;
var stopp = false;

function genKeyCode(){
    return (Math.floor(Math.random()*20) + 65);
}

function updateCount(){
    tvCount.innerHTML = "Score: "+ count;
    if(count>maxCount){
        maxCount = count;
    }
}

function gameOver(){
    if(count<0){
        alert("\tGame Over!\n Your Max Score is"+maxCount);
        window.location.reload();
    }
}

function rmvChild(ind){
    if(ind == 0){
        if(r1.childElementCount >= 1){
            r1.removeChild(r1.children[0]);
        }
    }
    else if(ind == 1){
        if(r2.childElementCount >= 1){
            r2.removeChild(r2.children[0]);
        }
    }
    else if(ind == 2){
        if(r3.childElementCount >= 1){
            r3.removeChild(r3.children[0]);
        }
    }
    else if(ind == 3){
        if(r4.childElementCount >= 1){
            r4.removeChild(r4.children[0]);
        }
    }
    else if(ind == 4){
        if(r5.childElementCount >= 1){
            r5.removeChild(r5.children[0]);
        }
    }
}

function check(prssdKey){
    for(i=0; i<arr.length; i++){
        if(arr[i] == prssdKey){
            arr[i] = 0;
            count++;
            rmvChild(i);
        }
    }
    updateCount();
    gameOver();
}


function apndChild(num, newLetter){
    if(num<=65){
        rmvChild(0);
        r1.appendChild(newLetter);
        if(arr[0]!=0){
            count--;
            updateCount();
        }
        arr[0] = num;
    }
    else if(num<=70 && num>65){
        rmvChild(1);
        r2.appendChild(newLetter);
        if(arr[1]!=0){
            count--;
            updateCount();
        }
        arr[1] = num;
    }
    else if(num<=75 && num>70){
        rmvChild(2);
        r3.appendChild(newLetter);
        if(arr[2]!=0){
            count--;
            updateCount();
        }
        arr[2] = num;
    }
    else if(num<=80 && num>75){
        rmvChild(3);
        r4.appendChild(newLetter);
        if(arr[3]!=0){
            count--;
            updateCount();
        }
        arr[3] = num;
    }
    else if(num<=85 && num>80){
        rmvChild(4);
        r5.appendChild(newLetter);
        if(arr[4]!=0){
            count--;
            updateCount();
        }
        arr[4] = num;
    }
    gameOver();

}

function createElmnt(){
    let newLetter = document.createElement('div');
    let cpdKBD = document.createElement('kbd');
    let num = genKeyCode();
    let letter = String.fromCharCode(num);
    cpdKBD.textContent= letter;
    newLetter.appendChild(cpdKBD);
    newLetter.classList.add('key');
    apndChild(num, newLetter);
    // const audio = document.getElementById('A');
    // audio.currentTime = 0;
    // audio.play();
}

play.addEventListener('click', function(){
    stopp = true;
    window.setInterval("createElmnt()", 2000);
});

refresh.addEventListener('click', function(){
    window.location.reload();
});

window.addEventListener('keydown', function(e){
    check(e.keyCode);
});


