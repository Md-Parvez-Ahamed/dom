const inputFiled = document.getElementById('qr-input-filed')
const inputValue = inputFiled.value
const qrImage = document.getElementById('qr-image')
const qrButton = document.getElementById('qr-button')
const downloadBtn = document.getElementById('download-btn')

const url =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`

qrButton.addEventListener('click',()=>{
    alert('hello')
    qrImage.src = url
    qrImage.style.display = 'block'
})
