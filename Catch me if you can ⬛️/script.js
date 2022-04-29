 //get random info:

const getRandomIntInclusive = (min = 0, max = 255) => {

    min = Math.ceil(min);
    max = Math.floor(max);
  
         return Math.floor(Math.random() * (max - min + 1)) + min;
} 

const getRandomTop = (min = 0,  max = 555 )=> {

    min = Math.ceil(min);
    max = Math.floor(max);
  
         return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomLeft = (min = 0,  max = 972)=> {

    min = Math.ceil(min);
    max = Math.floor(max);

         return Math.floor(Math.random() * (max - min + 1)) + min;
}


const rendomColor = () => {

    let numbers = [];
        for(let i=1; i<=3; i++){
          numbers.push(getRandomIntInclusive());
    }
             return `rgb(${numbers.join(`,`)})`;
}


const blocks = document.querySelectorAll(`.block`);
      
      blocks.forEach(block => {

            setInterval(() => {
                block.style.background = rendomColor();
                block.style.top = getRandomTop() + 'px';
                block.style.left = getRandomLeft() + 'px';
                }, 1000);
              
  })








