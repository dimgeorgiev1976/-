

// const canvasMouse = document.querySelector('[data-mouse]')
// const canvasBasic = document.querySelector('[data-basic]')

// const contextMouse = canvasMouse.getContext('2d')
// const contextBasic = canvasBasic.getContext('2d')

// let mouse = {
//     x: 0,
//     y: 0,
//     left: false
// }

// let color = 'black'

// init()

// function init () {
//     canvasMouse.width = 500
//     canvasMouse.height = 500

//     canvasBasic.width = 500
//     canvasBasic.height = 500

//     canvasBasic.parentElement.style.width = 500 + 'px'
//     canvasBasic.parentElement.style.height = 500 + 'px'

//     canvasMouse.addEventListener('mousemove', event => {
//         const rect = canvasMouse.getBoundingClientRect()

//         mouse.x = event.clientX - rect.x
//         mouse.y = event.clientY - rect.y
//         mouse.left = event.buttons === 1
//     })

//     canvasMouse.addEventListener('mousedown', event => {
//         if (event.buttons === 1) {
//             mouse.left = true
//         }
//     })

//     canvasMouse.addEventListener('mouseup', event => {
//         if (event.buttons === 1) {
//             mouse.left = false
//         }
//     })

//     document
//         .querySelector('input')
//         .addEventListener('change', function () {
//             color = this.value
//         })

//     requestAnimationFrame(loop)
// }

// function loop (timestamp) {
//     requestAnimationFrame(loop)

//     clearCanvas(canvasMouse)
//     drawPoint(contextMouse, mouse.x, mouse.y, color)

//     if (mouse.left) {
//         drawPoint(contextBasic, mouse.x, mouse.y, color)
//     }
// }

// function clearCanvas (canvas) {
//     canvas.width = canvas.width
// }

// function drawPoint (context, x, y, color) {
//     context.beginPath()
//     context.fillStyle = color
//     context.arc(x, y, 5, 0, 2 * Math.PI)
//     context.fill()
// }



// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// canvas.width = 500
// canvas.height = 500

// requestAnimationFrame(loop)

// const timeScale = 0.1

// function loop (timestamp) {
//     timestamp *= timeScale

//     requestAnimationFrame(loop)

//     // context.clearRect(0, 0, canvas.width, canvas.height)
//     // canvas.width |= 0
//     canvas.width = canvas.width
    
//     drawLine(
//         canvas.width / 2 - 200 * Math.cos(timestamp * Math.PI / 180),
//         canvas.height / 2 + 200 * Math.sin(timestamp * Math.PI / 180),
//         canvas.width / 2 + 200 * Math.cos(timestamp * Math.PI / 180),
//         canvas.height / 2 - 200 * Math.sin(timestamp * Math.PI / 180),
//         'green',
//         10
//     )
// }

// function drawLine (x1, y1, x2, y2, color = 'black', width = 1) {
//     context.strokeStyle = color
//     context.lineWidth = width

//     context.beginPath()
//     context.moveTo(x1, y1)
//     context.lineTo(x2, y2)
//     context.stroke()
// }

// function drawCircle (x, y, r, color = 'black', width = 1) {
//     context.strokeStyle = color
//     context.lineWidth = width

//     context.beginPath()
//     context.arc(x, y, r, 0, Math.PI * 2)
//     context.stroke()
// }

// function drawBall (x, y, r, color = 'black') {
//     context.fillStyle = color

//     context.beginPath()
//     context.arc(x, y, r, 0, Math.PI * 2)
//     context.fill()
// }

// function drawRect (x, y, width, height, color = 'black') {
//     context.strokeStyle = color
//     context.fillStyle = color

//     context.beginPath()
//     context.rect(x, y, width, height)
//     context.fill()
// }