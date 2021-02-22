'use strict';
let numberOfclik=25;
let attempts=0;
let arrOfImg=[]
let firstImge =document.getElementById('imge1')
let secendImge =document.getElementById('imge2')
let therdImge =document.getElementById('imge3')
let firImgeIndex;
let secImgeIndex;
let therImgeindex;
let imges=document.getElementById('imges')
let unorderdList = document.getElementById('unList');
let submit=document.createElement('button');

unorderdList.appendChild(submit);
submit.textContent='Show The Result';
let imgarr=[];
let voitarr=[];
let displayarr=[];
let inlinearr=[];
  

function Busmall (name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
    this.desiply=0;
    arrOfImg.push(this);
    imgarr.push(this.name)
}
new Busmall('bag','img/bag.jpg')
new Busmall('banana','img/banana.jpg')
new Busmall('bathroom','img/bathroom.jpg')
new Busmall('boots','img/boots.jpg')
new Busmall('breakfast','img/breakfast.jpg')
new Busmall('bubblegum','img/bubblegum.jpg')
new Busmall('chair','img/chair.jpg')
new Busmall('cthulhu','img/cthulhu.jpg')
new Busmall('dog-duck','img/dog-duck.jpg')
new Busmall('dragon','img/dragon.jpg')
new Busmall('pen','img/pen.jpg')
new Busmall('pet-sweep','img/pet-sweep.jpg')
new Busmall('scissors','img/scissors.jpg')
new Busmall('shark','img/shark.jpg')
new Busmall('sweep','img/sweep.png')
new Busmall('unicorn','img/unicorn.jpg')
new Busmall('usb','img/usb.gif')
new Busmall('water-can','img/water-can.jpg')
new Busmall('wine-glass','img/wine-glass.jpg')

function renderRandomThreeImg(){
   firImgeIndex=genaretRandomIndex();
   secImgeIndex=genaretRandomIndex();
   therImgeindex=genaretRandomIndex();


    while (firImgeIndex === secImgeIndex || firImgeIndex === therImgeindex || secImgeIndex === therImgeindex){
      
        console.log('hello')
    
   firImgeIndex=genaretRandomIndex();
   secImgeIndex=genaretRandomIndex();
  
    }

inlinearr[0]=firImgeIndex
inlinearr[1]=secImgeIndex
inlinearr[2]=therImgeindex

    
    firstImge.setAttribute('src', arrOfImg[firImgeIndex].source); 
    secendImge.setAttribute('src', arrOfImg[secImgeIndex].source);
    therdImge.setAttribute('src',arrOfImg[therImgeindex].source);

    }
// console.log(inlinearr)
// genaretRandomIndex();
// renderRandomThreeImg();


  function genaretRandomIndex(){
      let randomIndex = Math.floor(Math.random()*arrOfImg.length)
      while(inlinearr.includes(randomIndex)){
        randomIndex = Math.floor(Math.random()*arrOfImg.length)
      }
      return randomIndex

      
  }
  console.log(inlinearr)
genaretRandomIndex();
renderRandomThreeImg();
 
  
  imges.addEventListener('click', handleClicking)
//   imge2.addEventListener('click', handleClicking)
//   imge3.addEventListener('click', handleClicking)



function  handleClicking(event){
    attempts++
    if(attempts<=numberOfclik){
        if(event.target.id ==='imge1'){
            arrOfImg[firImgeIndex].votes++
            arrOfImg[firImgeIndex].desiply++
            arrOfImg[secImgeIndex].desiply++
            arrOfImg[therImgeindex].desiply++
        }
      
        if(event.target.id === 'imge2'){
            arrOfImg[secImgeIndex].votes++
            arrOfImg[firImgeIndex].desiply++
            arrOfImg[secImgeIndex].desiply++
            arrOfImg[therImgeindex].desiply++
        }
        else{
            arrOfImg[therImgeindex].votes++
            arrOfImg[firImgeIndex].desiply++
            arrOfImg[secImgeIndex].desiply++
            arrOfImg[therImgeindex].desiply++
        }
        renderRandomThreeImg();
        submit.addEventListener('click',showresult)
    }
}
  
  
    
        // submit.addEventListener('click',showresult)
      
        function showresult(event){
    let li;
    for(let i = 0 ; i < arrOfImg.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);                                  
      li.textContent = `${arrOfImg[i].name} it has ${arrOfImg[i].votes} Votes. and has seen ${arrOfImg[i].desiply} times`
     
    } 
   
    submit.removeEventListener('click',showresult)
    for(let j = 0; j<arrOfImg.length ;j++){
voitarr.push(arrOfImg[j].votes)
displayarr.push(arrOfImg[j].desiply)  }

chartrender();
}


    imge1.removeEventListener('click', handleClicking);
    imge2.removeEventListener('click', handleClicking);    
    imge3.removeEventListener('click', handleClicking);

    
  

    
function chartrender(){
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: imgarr ,
        datasets: [{
            label: 'custome choeis chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: voitarr,
        },{
            label: 'product display',
            backgroundColor: 'rgb(170, 150, 200)',
            borderColor: 'rgb(170, 150, 200)',
            data: displayarr,
        }]
    },

    // Configuration options go here
    options: {}
});

}
