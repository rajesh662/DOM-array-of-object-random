let rajesh = [
    {
        name:'A. P. J. Abdul Kalam',
        history:'Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering.',
    },
    {
        name:'vadivelu',
        history:'His first film as a lead actor, Imsai Arasan 23rd Pulikesi (2006), achieved commercial and critical success.',
    },
    {
        name:'appa',
        history:'real life hero',
    },
    {
        name:'Courtallam',
        history:'Courtallam is a panchayat town situated at a mean elevation of 160 m in the foothills of the Western Ghats in Tenkasi district of Tamil Nadu, India. The Coutrallam Falls on the Chittar River is a major tourist attraction',
    },
    {
        name:'Therukural',
        history:'Therukural is a studio album composed by Arivu and OfRo, both members of The Casteless Collective. The band also produced the album, which highlights various political themes and was touted to be a hip-hop album with a social message. The album was released on 26 June 2019, and received positive response upon release.',
    },
    {
        name:'my life',
        history:'Written in these walls are the stories that I can t explainI leave my heart open but it stays right here empty for days',
    },
    {
        name:'amma',
        history:'i love my amma',
    },

];

let result = rajesh.map(function(cont){
    return cont.name;
    
       });
       let boxName = result;
let array1 =[];
let add1 = boxName.map(function(add1s){
    return add1s;
})    
let save1 = add1

       let result1 = rajesh.map(function(cont1){
        return cont1.history;
        
           });
           let boxHistory =result1;

           let array2 =[];
let add2 = boxHistory.map(function(add2s){
    return add2s;
})    
let save2 = add2
let btn = document.querySelector("#btn");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
btn.addEventListener("click", function(){
  
    h1.innerHTML = save1[Math.floor( Math.random()*save1.length)];
    p.innerHTML = save2[Math.floor(Math.random()*save2.length)];
    box1.style.padding="20px";
})
