const counterElement = document.getElementById('counter')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')

let counter = 0


// Normal System
plusBtn.addEventListener('click',() =>{
    console.log('plus btn click');
    counter = counter + 1;
    counterElement.textContent = counter

    if(counter >= 10){
        plusBtn.setAttribute('disabled',true)
    }else(
        plusBtn.removeAttribute('disabled',false)
    )

})

minusBtn.addEventListener('click',() =>{
    console.log('minus btn click');
    counter = counter - 1;
    counterElement.textContent = counter
    if(counter <= 0){
        minusBtn.setAttribute('disabled',true)
    }else(
        plusBtn.removeAttribute('disabled',false)
    )
})