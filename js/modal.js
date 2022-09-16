
const items = {
    first:['Burger',20],
    second:['Pizza',50],
    third:['Drinks',10]
}


const modalFunc = (items) =>{
const button = document.querySelector('.cover__button')
const modalCloseButton = document.querySelector('.modalCloseButton')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

const content = document.querySelector('.modalContent')

button.addEventListener('click',()=>{
    modal.classList.add('modalActive')
    backdrop.classList.add('backdropActive')
    showContent()
})

const removeClasses = () =>{
    content.innerHTML=''
    modal.classList.remove('modalActive')
    backdrop.classList.remove('backdropActive')
   
}

modalCloseButton.addEventListener('click', removeClasses)
setTimeout(removeClasses,4000)


backdrop.addEventListener('click',removeClasses)


modal.addEventListener('click',(e)=>{
    e.stopPropagation()
})


const showContent = () =>{
const contentButton = document.createElement('button')
contentButton.className='modalOrder'
contentButton.textContent='Order Food'
content.append(contentButton)
const values = Object.values(items)
// console.log(values);
values.forEach(el=>{
    const text = document.createElement('p')
    text.className='contentText'
    text.textContent=`${el[0]}: ${el[1]}$`
    content.append(text)
})

contentButton.addEventListener('click',()=>{
    // setTimeout(removeClasses,2000)
    content.innerHTML = `
        <p>THANK YOU</p>
        
    `
}) }
}
modalFunc(items)



// const timer = () =>{
// alert('timer has started');
// }
// setTimeout(timer,4000)