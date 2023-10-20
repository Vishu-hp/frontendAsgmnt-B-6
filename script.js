let addFrt = document.getElementById("addFruitBtn")
let input = document.getElementById('inpid')
let ollist = document.getElementById("ol");


addFrt.addEventListener('click', () => {
    let fruit = input.value
    if(fruit == ''){
        alert("Input can't be empty")
    }
    else{
        input.value = ''
        showList(fruit)
    }
})

const showList = (fruit) => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    ollist.appendChild(listItem);

    let flag = true
    let stopFlag = true
    while (flag) { 
        flag = false; 
        li = ollist.getElementsByTagName("li"); 
    
        for (i = 0; i < (li.length - 1); i++) { 
            stopFlag = false; 
            if (li[i].innerHTML.toLowerCase() >  li[i + 1].innerHTML.toLowerCase()) { 
                stopFlag = true; 
                break; 
            } 
        } 
     
        if (stopFlag) { 
            li[i].parentNode.insertBefore( 
                    li[i + 1], li[i]); 
    
            flag = true; 
        } 
    } 

}


