var pertanyaan=[
    {
    question : " Which of these heroes has the highest attack range ?",
    answer:["A.  Tiny","B.  Queen Of Pain","C.  Drow Ranger","D.  Sniper",3]
    },
    {
    question : "Which one of these items grants the ability to see invisible units?",
    answer:["A.  Eye Of Skadi","B.  Monkey King Bar","C.  Gem Of True Sigth","D.  Mask Of Maddness",2]
    },
    {
    question : " What is the best counter item for Phantom Assain in the earlier game",
    answer:["A.  Orge Axe","B.  Arcane Boots","C.  Boots Of Travel","D.  Blade Mail",3]
    },
    {
    question : " Which Hero has Malefice as an ability?",
    answer:["A.  Enigma","B.  Slark","C.  Nature Prophet","D.  Invoker",0]
    },
    {
    question : " Which of these items does NOT give an armor bonus?",
    answer:["A.  Helm Of Iron Will","B.  Veil Of Discord","C.  Blade Mail","D.  Assault Cuirras",1]
    },
    {
    question : " Which Hero Has Blade Furry as an Ability",
    answer:["A.  Kunka","B.  Axe","C.  Juggernaut","D.  Phantom Assain",2]
    },
    {
    question : " What item will be dropped when you killed Roshan",
    answer:["A.  Power Treads","B.  Relic","C.  Divine Rapier","D.  Aegis of immortal",3]
    },
    {
    question : " What are the 3 items required for Butterfly?",
    answer:["A.  Quarterstaff + Talisman of Evasion + Eaglesong","B.  Quarterstaff + Talisman of Evasion + Sacred Relic","C.  Quarterstaff + Talisman of Evasion + Recipe","D.  Quarterstaff + Talisman of Evasion + Hyperstone",0]
    },
    {
    question : " Which of these is not an intelligence item?",
    answer:["A.  Daedalus","B.  Force Staff","C.  Aghanim Scepter","D.  Octarine Core",0]
    },
    {
        question : " Witch team is the first winner The Internatioal ?",
        answer:["A.  Evil Geniuses","B.  NewBee","C.  Alliace","D.  Natus Vincere",3]
    },
]

var index=0
var score=0




nextQuestion(index)

function nextQuestion(index){
  
if(index > pertanyaan.length-1){
    document.getElementById('soal').style.visibility = "hidden"
    document.getElementById('soal').style.position = "absolute"
    
    var x = document.getElementById('total');
      x.style.visibility = 'visible';
    
    var hasil = document.getElementById('score')
    hasil.innerText= score

    var skill=""
    if(score > 80 && score <=100){
        skill = "You Are Pro Player"
    } else if( score > 60){
        skill = "Nice One , Pick Carry"
    } else if ( score > 40){
        skill = "Not Bad, Pick your Familiar Heroes"
    } else if( score > 20){
        skill = "Noob, Buy Wards Please!!"
    } else {
        skill = " Good Game Well Played NOOB !!"
    }

    return hasil.nextElementSibling.innerHTML=skill
}
    var question=document.getElementById("question")
    question.innerText=pertanyaan[index]['question']
    
    var answer= document.getElementById("answer").children
    for(var i=0; i<answer.length;i++){
        for(var j=0;j<pertanyaan.length;j++){
            answer[i].innerText=pertanyaan[index]["answer"][i]

        }
    }
}

var buttonA = document.getElementById('a')
buttonA.addEventListener('click', onclickButtonA);
function onclickButtonA(){
    var jawaban=pertanyaan[index]['answer']
    if(jawaban[jawaban.length-1] === 0){
        score+=10
    }
    index++
    nextQuestion(index)
}

var buttonB = document.getElementById('b')
buttonB.addEventListener('click', onclickButtonB);
function onclickButtonB(){
    var jawaban=pertanyaan[index]['answer']
    if(jawaban[jawaban.length-1] === 1){
        score+=10
    }
    index++
    nextQuestion(index)
}
var buttonC = document.getElementById('c')
buttonC.addEventListener('click', onclickButtonC);
function onclickButtonC(){
    var jawaban=pertanyaan[index]['answer']
    if(jawaban[jawaban.length-1] === 2){
        score+=10
    }
    index++
    nextQuestion(index)
}
var buttonD = document.getElementById('d')
buttonD.addEventListener('click', onclickButtonD);
function onclickButtonD(){
    var jawaban=pertanyaan[index]['answer']
    if(jawaban[jawaban.length-1] === 3){
        score+=10
    }
    index++
    nextQuestion(index)
}
