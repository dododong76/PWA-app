document.querySelector('#left').addEventListener('click', clickEvent)

function clickEvent(event) {
    if (event.target.matches('.btn')) {
        gugudan(event)
    }

    function gugudan(event) {
        center_element = document.querySelector('#center')
        center_element.innerHTML = ''  // center를 다 지워버린다. 

        let i, number  // i 는 for문을 돌리기 위한 변수, number는 숫자  
        number = Number(event.target.dataset.number)
        console.log(number)
        for (i = 1; i < 10; i++) {
            center_element.innerHTML += ` ${number} X ${i} = ${number * i} <br>`
        }
    }

}

