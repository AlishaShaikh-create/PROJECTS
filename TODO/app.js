let input = document.querySelector('input')
let button = document.querySelector('button')
let ul= document.querySelector('ul')


button.addEventListener('click',function(event){
    let li = document.createElement('li')

    // checking for empty value
    if(input.value.trim() == ''){
        return 
    }
    li.innerText = input.value

    
    let btn = document.createElement('button')
    btn.classList.add('delete')
    btn.innerText='delete'
    btn.onclick = function(){
        let parent = this.parentElement;
        parent.remove()
    }
    li.appendChild(btn)
    ul.appendChild(li)
    // clearing input after adding
    input.value=''



})



