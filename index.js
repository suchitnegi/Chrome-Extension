
let myLeads = ["suchit","NEgi","haahhahahah"]
const inputEl = document.getElementById("input-el")
// inputEl.textContent()
const ulEl = document.getElementById("ul-el")

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    console.log("button clicked")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = ""
for(let i = 0 ; i < myLeads.length ; i++)
{
    listItems += "<li>" + myLeads[i] + "</li>"

//    const li = document.createElement("li")
//    li.textContent = myLeads[i]
//    ulEl.append(li)

}
ulEl.innerHTML = listItems

