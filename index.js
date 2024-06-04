let base = document.querySelector('#base');
let height= document.querySelector('#height');
let btn = document.querySelector('#areaCon');
let areaSpan = document.querySelector('#TriSpan')

btn.addEventListener('click', ()=>{
    areaSpan.innerHTML = [(0.5 *base.value * height.value) ]
})