getData()
//header div
function header(){
    const header = document.createElement("div")
    header.id = "header"
    document.body.appendChild(header)
    header.innerText = "Eyes in the City"
}
header()
//left column div
let leftColumn;
function stack(div){
    if(!leftColumn){
    leftColumn = document.createElement("div")
    leftColumn.id = "left-column"
    document.body.appendChild(leftColumn)
    leftColumn.innerText = "Sumbited Tickets"
    }
    return leftColumn.appendChild(div)
}

//small box div
let smallbox;
const inputs =[]
function smallBox(div){
     smallBox = document.createElement("div")
    smallBox.id = "small-box"
    document.body.appendChild(smallBox)
    
    
    for(let i = 1; i<= 4; i++){
        const input = document.createElement('input')
        input.id = `input${i}`
        input.className = "inputData"
        input.type ='text'
        smallBox.appendChild(input)
        // smallBox(input)
        inputs.push(input)
    }
    return smallBox.appendChild(div)
    //inputs boxes that are going in the small box div
}
//submit btn
    const submitButton= document.createElement("button")
    submitButton.type = "submit"
    submitButton.textContent="Submit Ticket"
    // smallBox.appendChild(submitButton)
    smallBox(submitButton)
    // smallDisplayBox.appendChild(submitButton)
//event lisnter on btn that creates smallDisplayBox,edit btn,delete,btn,save btn, does a post req
submitButton.addEventListener("click",async(e)=>{
    e.preventDefault()
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value
    let input3 = document.querySelector("#input3").value
    let input4 = document.querySelector("#input4").value
//obj that returns user input from input boxes
    const objData={
        name: input1,
        date: input2,
        location: input3,
        ticketproblem: input4
    }
    // console.log(objData)
//fetch post for adding input data/obj to the database
    const response = await fetch('http://localhost:3000/tickets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(objData)
    })
    let data =  await response.json()
    console.log(data)
    location.reload()
})


async function displayData(arr){
const ticketsArr = await arr
console.log(ticketsArr)

//make loop to go through arr into obj 
for(let i = 0; i<ticketsArr.length;i++){
    // console.log(ticketsArr[i].date)
    const objData={
        name: ticketsArr[i].name,
        date: ticketsArr[i].date.substring(0,10),
        location: ticketsArr[i].location,
        ticketproblem:ticketsArr[i].ticketproblem,
        id:ticketsArr[i].id
    }
    // console.log(objData)



//smalldisplaybox that gets user input data and appends it to left column
const smallDisplayBox = document.createElement("div")
smallDisplayBox.id = "small-display-box"
//delete btn that is made once the user clicks submit, and is appened to the smalldisplaybox
const deleteBtn =document.createElement('button')
deleteBtn.id="delete-btn"
deleteBtn.textContent="Delete"
//function of what the btn does
deleteBtn.addEventListener("click",()=>{
smallDisplayBox.remove()
})
//making dynamic div display box 
const displayName = document.createElement("div")
const displayDate = document.createElement("div")
const displayLocation = document.createElement("div")
const displayIssue = document.createElement("div")
displayName.id = "display-name"
displayDate.id = "display-date"
displayLocation.id = "display-location"
displayIssue.id = "display-issue"

displayName.innerText = `Name: ${objData.name}`
displayDate.innerText = `Date: ${objData.date}`
displayLocation.innerText = `Location: ${objData.location}`
displayIssue.innerText = `Issue: ${objData.ticketproblem}`

smallDisplayBox.appendChild(displayName)
smallDisplayBox.appendChild(displayDate)
smallDisplayBox.appendChild(displayLocation)
smallDisplayBox.appendChild(displayIssue)

//edit btn that is made along with the making of smalldisplaybox and is appened to it
const editBtn = document.createElement('button');
editBtn.id = "edit-btn";
editBtn.textContent = "Edit";
smallDisplayBox.appendChild(editBtn)
smallDisplayBox.appendChild(deleteBtn)

// leftcolumn.appendChild(smallDisplayBox)
stack(smallDisplayBox)
/*function of the edit btn, it removes the smalldisplaybox, and gets all last inputs and returns into
input boxes
*/
editBtn.addEventListener("click", () => {
    
    inputs.forEach((input, index) => {
        input.value = Object.values(objData)[index]
        smallDisplayBox.remove()
    })
    
    const saveBtn = document.createElement("button")
    saveBtn.id = "save-btn";
    saveBtn.textContent = "Save"
    
    smallBox.appendChild(saveBtn)
    
    submitButton.style.display = "none"
    saveBtn.addEventListener("click",async () => {
        
        
        smallDisplayBox.remove()
        smallDisplayBox.innerHTML = ""

        deleteBtn.addEventListener("click",()=>{
            smallDisplayBox.remove()
        })

        Object.keys(objData).forEach(key =>{
            objData[key] = null
        })

        objData.name = inputs[0].value
        objData.date = inputs[1].value
        objData.location = inputs[2].value
        objData.ticketproblem = inputs[3].value
        // console.log(inputs);
        saveBtn.style.display = "none"
        submitButton.style.display = "inline-block"

        const displayName = document.createElement("div")
        const displayDate = document.createElement("div")
        const displayLocation = document.createElement("div")
        const displayIssue = document.createElement("div")
        displayName.id = "display-name"
        displayDate.id = "display-date"
        displayLocation.id = "display-location"
        displayIssue.id = "display-issue"

        displayName.innerText = `Name: ${objData.name}`
        displayDate.innerText = `Date: ${objData.date}`
        displayLocation.innerText = `Location: ${objData.location}`
        displayIssue.innerText = `Issue: ${objData.ticketproblem}`

        smallDisplayBox.appendChild(displayName)
        smallDisplayBox.appendChild(displayDate)
        smallDisplayBox.appendChild(displayLocation)
        smallDisplayBox.appendChild(displayIssue)

        smallDisplayBox.appendChild(editBtn);
        smallDisplayBox.appendChild(deleteBtn)

        // leftColumn.appendChild(smallDisplayBox)
        stack(smallDisplayBox)
        
        
        inputs.forEach((input)=>{
            input.value = ""
         })
    })
})



// inputs.forEach((input)=>{
//     input.value = ""
//})
}
}
const allTickets =  getData()
displayData(allTickets)

//div for the map to be in
    const bigBox = document.createElement("div")
    bigBox.id = "big-box"
    document.body.appendChild(bigBox)
//map api
    const map = document.getElementById("container")
    const iframe = document.createElement('iframe')
    iframe.id = "iframe"
    iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27334.540426275005!2d-97.79002175000001!3d31.087001599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675112235856!5m2!1sen!2sus"
    bigBox.appendChild(iframe)

//input titles being added to the smallbox
    const name = document.createElement('div')
    const date = document.createElement('div')
    const place = document.createElement('div')
    const issue = document.createElement('div')
    name.id="name"
    date.id="date"
    place.id="place"
    issue.id="issue"

    name.innerText = "Name"
    date.innerText = "Date(YYYY-MM-DD)"
    place.innerText = "Location"
    issue.innerText = "Issue"

    smallBox.appendChild(name)
    smallBox.appendChild(date)
    smallBox.appendChild(place)
    smallBox.appendChild(issue)
    // smallBox(name)
    // smallBox(date)
    // smallBox(place)
    // smallBox(issue)
    
async function getData(){
     const response = await fetch('http://localhost:3000/tickets',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // console.log(await response.json())
        return await response.json()
}
