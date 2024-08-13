const copyBtn = document.querySelector('.copybtn')
const txtarea = document.querySelector('textarea')

copyBtn.addEventListener('click',() => {
    txtarea.select();
    document.execCommand('copy');
    copyBtn.innerHTML = " <ion-icon name='checkmark'></ion-icon>";
    copyBtn.style.background = "#2dcda7"
    copyBtn.style.color = "#fff"

    setTimeout(() => {
        document.getSelection().removeAllRanges()
        copyBtn.innerHTML = " <ion-icon name='copy-outline'></ion-icon>";
        copyBtn.style.background = ""
        copyBtn.style.color = ""
    }, 3000)

})







