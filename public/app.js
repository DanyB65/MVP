const header = document.createElement("div")
header.id = "header"
document.body.appendChild(header)
header.innerText = "Website"

const leftColumn = document.createElement("div")
leftColumn.id = "left-column"
document.body.appendChild(leftColumn)
// leftColumn.innerText = "Sumbited Tickets"

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

const submitButton= document.createElement("button")
submitButton.type = "submit"
submitButton.textContent="Submit Ticket"
smallBox.appendChild(submitButton)

submitButton.addEventListener("click",(e)=>{
    e.preventDefault()
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value
    let input3 = document.querySelector("#input3").value
    let input4 = document.querySelector("#input4").value

    const objData={
        name: input1,
        date: input2,
        location: input3,
        issue: input4

    }
    console.log(objData)

    inputs.forEach((input)=>{
        input.value = ""
    })
    fetch("/tickets",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
    
const smallDisplayBox = document.createElement("div")
smallDisplayBox.id = "small-display-box"

const deleteBtn =document.createElement('button')
deleteBtn.id="delete-btn"
deleteBtn.textContent="Delete"

deleteBtn.addEventListener("click",()=>{
    smallDisplayBox.remove()
})

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
displayIssue.innerText = `Issue: ${objData.issue}`

smallDisplayBox.appendChild(displayName)
smallDisplayBox.appendChild(displayDate)
smallDisplayBox.appendChild(displayLocation)
smallDisplayBox.appendChild(displayIssue)
smallDisplayBox.appendChild(deleteBtn)

leftColumn.appendChild(smallDisplayBox)

})


const bigBox = document.createElement("div")
bigBox.id = "big-box"
document.body.appendChild(bigBox)

const map = document.getElementById("container")
const iframe = document.createElement('iframe')
iframe.id = "iframe"
iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27334.540426275005!2d-97.79002175000001!3d31.087001599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675112235856!5m2!1sen!2sus"
bigBox.appendChild(iframe)

// const text = document.createElement("div")
// text.id = "text"
// document.body.appendChild(text)

const name = document.createElement('div')
const date = document.createElement('div')
const place = document.createElement('div')
const issue = document.createElement('div')
name.id="name"
date.id="date"
place.id="place"
issue.id="issue"

name.innerText = "Name"
date.innerText = "Date(YYYY-MM-DD"
place.innerText = "Location"
issue.innerText = "Issue"

smallBox.appendChild(name)
smallBox.appendChild(date)
smallBox.appendChild(place)
smallBox.appendChild(issue)







// const newDisplayBox = document.querySelector(".newDisplayBox");
// const createBtn = document.querySelector("#createBtn");
// smallDisplayBox.appendChild(newDisplayBox)
// smallDisplayBox.appendChild(createBtn)
// createBtn.addEventListener("click", function() {
//   const smallDisplayBox = document.createElement("div");
//   smallDisplayBox.classList.add("smallDisplayBox");
//   const inputText = document.querySelector("#inputBox").value;
//   smallDisplayBox.innerHTML = inputText;
//   const deleteBtn = document.createElement("button");
//   deleteBtn.id="deleteBtn"
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.classList.add("deleteBtn");
//   smallDisplayBox.appendChild(deleteBtn);
//   newDisplayBox.appendChild(smallDisplayBox);
//   deleteBtn.addEventListener("click", function() {
//     smallDisplayBox.remove();
//   });
// })



