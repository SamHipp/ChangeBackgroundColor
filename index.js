const global = document.querySelector('body');
const button = document.querySelector('button');
let currentColor = document.querySelector('p')
// var ca = 
// let i = 0
// while(i < 1){
// let ca = '0'
// let cb = '7'
// let cc = '0'
// let cd = 'F'
// let ce = '0'
// let cf = 'E'
// i++;
// }

// let kolor = [ca, cb, cc, cd, ce, cf]
// let queso = [0, 0, 0, 0, 0, 0]

console.log('hi');

document.querySelector('button').addEventListener('click', function (){
    let ca = '0';
    let cb = '0';
    let cc = '0';
    let cd = '0';
    let ce = '0';
    let cf = '0';

    let a = Math.random();
    if(a > .375){
        let nca = Math.random();
        let tca = nca*10
        let rca = Math.round(tca);
        ca = String(rca);

    }
    else{
        let nca = Math.random();
        let lca = Math.round(nca*5);
        switch(lca){
            case 0: ca = 'A'; break;
            case 1: ca = 'B'; break;
            case 2: ca = 'C'; break;
            case 3: ca = 'D'; break;
            case 4: ca = 'E'; break;
            case 5: ca = 'F'; break;
        }
    }
    // console.log(a);
    let b = Math.random();
    if(b > .375){
        let ncb = Math.random();
        let tcb = ncb*10
        let rcb = Math.round(tcb);
        cb = String(rcb);
    }
    else{
        let ncb = Math.random();
        let lcb = Math.round(ncb*5);
        switch(lcb){
            case 0: cb = 'A'; break;
            case 1: cb = 'B'; break;
            case 2: cb = 'C'; break;
            case 3: cb = 'D'; break;
            case 4: cb = 'E'; break;
            case 5: cb = 'F'; break;
        }
    }
    // console.log(a);
    let c = Math.random();
    if(c > .375){
        let ncc = Math.random();
        let tcc = ncc*10
        let rcc = Math.round(tcc);
        cc = String(rcc);
    }
    else{
        let ncc = Math.random();
        let lcc = Math.round(ncc*5);
        switch(lcc){
            case 0: cc = 'A'; break;
            case 1: cc = 'B'; break;
            case 2: cc = 'C'; break;
            case 3: cc = 'D'; break;
            case 4: cc = 'E'; break;
            case 5: cc = 'F'; break;
        }
    }
    // console.log(a);
    let d = Math.random();
    if(d > .375){
        let ncd = Math.random();
        let tcd = ncd*10
        let rcd = Math.round(tcd);
        ca = String(rcd);
    }
    else{
        let ncd = Math.random();
        let lcd = Math.round(ncd*5);
        switch(lcd){
            case 0: cd = 'A'; break;
            case 1: cd = 'B'; break;
            case 2: cd = 'C'; break;
            case 3: cd = 'D'; break;
            case 4: cd = 'E'; break;
            case 5: cd = 'F'; break;
        }
    }
    // console.log(a);
    let e = Math.random();
    if(e > .375){
        let nce = Math.random();
        let tce = nce*10
        let rce = Math.round(tce);
        ce = String(rce);
    }
    else{
        let nce = Math.random();
        let lce = Math.round(nce*5);
        switch(lce){
            case 0: ce = 'A'; break;
            case 1: ce = 'B'; break;
            case 2: ce = 'C'; break;
            case 3: ce = 'D'; break;
            case 4: ce = 'E'; break;
            case 5: ce = 'F'; break;
        }
    }
    // console.log(a);
    let f = Math.random();
    if(f > .375){
        let ncf = Math.random();
        let tcf = ncf*10
        let rcf = Math.round(tcf);
        cf = String(rcf);
    }
    else{
        let ncf = Math.random();
        let lcf = Math.round(ncf*5);
        switch(lcf){
            case 0: cf = 'A'; break;
            case 1: cf = 'B'; break;
            case 2: cf = 'C'; break;
            case 3: cf = 'D'; break;
            case 4: cf = 'E'; break;
            case 5: cf = 'F'; break;
        }
    }
    // console.log(a);
// i++;

global.style.background = `#${ca}${cb}${cc}${cd}${ce}${cf}`;
        currentColor.innerText = `Current color: #${ca}${cb}${cc}${cd}${ce}${cf}`;

        // console.log(ca, cb, cc, cd, ce, cf);
        // console.log(global.style.background);
    
})





    

// document.querySelector('button').addEventListener('click', function(){
//     let a = document.querySelector('p');
//     a.style.background = '#FFFFFF';
// })