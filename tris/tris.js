const cells = document.querySelectorAll('.cell')
const h2 = document.querySelector('h2')
let count = 0;
let values = ["X","O"]

cells.forEach((element) => {
    element.addEventListener('click',()=>{
        count++;
        if(!element.classList.contains('selected')){
            if(count % 2 == 0){
                element.textContent = values[0];
                element.classList.add('selected')
            }else{
                element.textContent = values[1]
                element.classList.add('selected')
            }
        }     
        for (let i = 0; i < 3; i++) {
            if(
                cells[i].textContent === values[0] &&
                cells[i+3].textContent === values[0] &&
                cells[i+6].textContent === values[0]
            ){
                h2.innerText = 'Win X'
            }
            if(
                cells[i].textContent === values[1] &&
                cells[i+3].textContent === values[1] &&
                cells[i+6].textContent === values[1]
            ){
                h2.innerText = 'Win O'
            }
            if(
                cells[i*3].textContent === values[0]&&
                cells[(i*3)+1].textContent === values[0]&&
                cells[(i*3)+2].textContent === values[0]
            ){
                h2.innerText = 'Win X'
            }
            if(
                cells[i*3].textContent === values[1]&&
                cells[(i*3)+1].textContent === values[1]&&
                cells[(i*3)+2].textContent === values[1]
            ){
                h2.innerText = 'Win O'
            }
            if(
                cells[0].textContent === values[0]&&
                cells[4].textContent === values[0]&&
                cells[8].textContent === values[0]
            ){
                h2.innerText = 'Win X'
            }
            if(
                cells[2].textContent === values[1]&&
                cells[4].textContent === values[1]&&
                cells[6].textContent === values[1]
            ){
                h2.innerText = 'Win O'
            }
            if(
                cells[0].textContent === values[1]&&
                cells[4].textContent === values[1]&&
                cells[8].textContent === values[1]
            ){
                h2.innerText = 'Win O'
            }
            if(
                cells[2].textContent === values[0]&&
                cells[4].textContent === values[0]&&
                cells[6].textContent === values[0]
            ){
                h2.innerText = 'Win X'
            }
            
        }
            
            
        //     }
        })
    });
    // for(let i = 0; i < cells.length; i++){
        // }
        
        
        // console.log(indx.toFixed());//valore stringa
        // console.log(indx.valueOf());//valore numero
        // else if(cells.item((index*3)+1).textContent == values[1] || cells.item((index*3)+1).textContent == values[0]){
        //     console.log('colonna2');
    
        // }else if(cells.item((index*3)+2).textContent == values[1] || cells.item((index*3)+2).textContent == values[0]){
        //     console.log('colonna3');
        // }