console.log('app.js connected');

const generateQrCode = () =>{
    // alert('hello')
    const inputFiled = document.getElementById('qr-input-filed')
    const inputValue = inputFiled.value
    console.log(inputValue);

    const qrImage = document.getElementById('qr-image')
    const downloadBtn = document.getElementById('download-btn')

    if(inputValue.trim() !== ''){

        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
        qrImage.style.display = 'block'
        downloadBtn.style.display = 'block'
        // downloadQr(qrImage.src)
        downloadBtn.onclick = ()=> downloadQR(qrImage.src)
    }else{
        alert('Please Enter your text or url')
    }
}

const downloadQR = (qr)=>{
    const link = document.createElement('a');
    link.href = qr;
    link.download = 'qr.png'
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link)
}

downloadBtn2.addEventListener('click', () => {
    if (inputValue.trim() === '') {
        alert('Please generate a QR code first.');
        return;
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;

    fetch(url)
        .then(res => res.blob())
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'qr.jpg';
            document.body.appendChild(link);
            link.click(); // Trigger the download
            document.body.removeChild(link);
        })
        .catch((error) => {
            console.error('Error downloading QR code:', error);
        });
});
