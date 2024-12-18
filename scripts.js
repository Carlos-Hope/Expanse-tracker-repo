let formExpense = document.getElementById('formExpense')

const nameExp = document.getElementById('id_name')
const date = document.getElementById('id_date')
const amount = document.getElementById('id_number')

formExpense.addEventListener('submit',(event)=>{
    event.preventDefault()

    let table  = document.getElementById('id_table')

    let btn = document.createElement('button')
    btn.setAttribute('class', 'btn btn-danger')
    btn.textContent = "Delete"

    const tr = table.insertRow();

    let nameCell = tr.insertCell(0)
    let dateCell = tr.insertCell(1)
    let amountCell = tr.insertCell(2)
    let deleteCell = tr.insertCell(3)

    btn.addEventListener('click',()=>{
       tr.remove() 
    },false)

    nameCell.textContent = nameExp.value
    dateCell.textContent = date.value
    amountCell.textContent = amount.value
    deleteCell.appendChild(btn)


    nameExp.value = ""
    date.value = "" 
    amount.value = ""

},false)

