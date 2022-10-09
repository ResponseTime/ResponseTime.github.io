const pic = document.querySelectorAll('.item')
const button = document.getElementById('button')
pic.forEach(pi=> {
    pi.addEventListener('click',()=>{
        if(pi.style.filter ==='brightness(50%)'){
            pi.style.filter = "brightness(100%)"
        }
        else{
            pi.style.filter = "brightness(50%)"
        }
    })
})
button.addEventListener('click',()=>{
    window.location.replace('index.html')
})