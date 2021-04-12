

const activeButton = document.querySelector('.price-button__button')

const onChangeButton = () => {
    activeButton.classList.toggle('button-active')
}


const activeCross = () => {
    document.querySelector('.cross').classList.toggle('cross-active')
    document.querySelector('.block-cross').classList.toggle('block-cross-active')
    document.querySelector('.cross-black').classList.toggle('cross-black-active')
}


const activeCross2 = () => {
    document.querySelector('.cross-2').classList.toggle('cross-2-active')
    document.querySelector('.block-cross-2').classList.toggle('block-cross-2-active')
    document.querySelector('.cross-2-black').classList.toggle('cross-2-black-active')
}