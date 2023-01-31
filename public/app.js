/* I will need 4 event lisnters, for the submit btn,DELTE,POST and a lisnter on the map 
that collects the data info for the input box in the ticket box
*/ 


const header = document.createElement("div")
header.id = "header"
document.body.appendChild(header)
header.innerText = "Website"

const leftColumn = document.createElement("div")
leftColumn.id = "left-column"
document.body.appendChild(leftColumn)
leftColumn.innerText = "Sumbited Tickets"

const smallBox = document.createElement("div")
smallBox.id = "small-box"
document.body.appendChild(smallBox)
const inputs = []
for(let i = 1; i<= 4; i++){
    const input = document.createElement('input')
    input.id = `input${i}`
    input.className = "inputData"
    input.type ='text'
    smallBox.appendChild(input)
    inputs.push(input)
}
// let name = document.getElementById('input 1')
// let date = document.getElementById('input 2')
// let location = document.getElementById('input 3')
// let issue = document.getElementById('input4')

// const inputClass = getElementByClassName('inputData')


const submitButton= document.createElement("button")
submitButton.type = "submit"
submitButton.textContent="Submit Ticket"
smallBox.appendChild(submitButton)

submitButton.addEventListener("click",(e)=>{
    e.preventDefault()
    const inputData = inputs.map((input)=> [input.id,input.value]).reduce((acc,[id,value])=>{
        acc[id] = value
        return acc
    })
    console.log(inputData)
    inputs.forEach((input)=>{
        input.value = ""
    })
})

const bigBox = document.createElement("div")
bigBox.id = "big-box"
document.body.appendChild(bigBox)

const map = document.getElementById("container")
const iframe = document.createElement('iframe')
iframe.id = "iframe"
iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27334.540426275005!2d-97.79002175000001!3d31.087001599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675112235856!5m2!1sen!2sus"
bigBox.appendChild(iframe)
