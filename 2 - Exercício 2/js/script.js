const body = document.body;
const boneco = document.querySelector('.boneco');

let posicaoVertical = 0
let posicaoHorizontal = 0


body.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        if (posicaoVertical >= 930) {
            return
        }
        boneco.src = './assets/front.png'
        posicaoVertical += 30
        boneco.style.top = `${posicaoVertical}px`
    }
})

body.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
        if (posicaoVertical <= 0) {
            return
        }
        boneco.src = './assets/back.png'
        posicaoVertical -= 30
        boneco.style.top = `${posicaoVertical}px`
    }
    console.log(event)
})

body.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        if (posicaoHorizontal >= 1160) {
            return
        }
        boneco.src = './assets/left.png'
        posicaoHorizontal += 30
        boneco.style.right = `${posicaoHorizontal}px`
    }
})

body.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        if (posicaoHorizontal <= 0) {
            return
        }
        boneco.src = './assets/right.png'
        posicaoHorizontal -= 30
        boneco.style.right = `${posicaoHorizontal}px`
    }
})






