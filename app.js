const buttonEl = document.querySelector('button')
const inputGoalEl = document.getElementById('goal')
const inputDescEl = document.getElementById('goalDesc')
const listEl = document.querySelector('ul')

// Function to remove an Item
function removeItem(elementId)
{
    document.getElementById(elementId).remove()
}

// Function to add an Item
function addGoal()
{
    const enteredGoal = inputGoalEl.value ;
    const enteredGoalDesc = inputDescEl.value ;

    if( enteredGoal.length > 0 )
    {
        const enteredGoalStrong = document.createElement('strong')
        enteredGoalStrong.textContent = enteredGoal

        var attribId = "goalItem"
        attribId = attribId.concat( listEl.childElementCount+1 ) 

        const buttonDeleteItem = document.createElement('input')
        buttonDeleteItem.setAttribute('onclick', 'removeItem("' + attribId + '")')
        buttonDeleteItem.setAttribute('type', 'button')
        buttonDeleteItem.setAttribute('style', 'margin-top: 8px')
        
        buttonDeleteItem.value = "Delete"

        const lineBreak = document.createElement('br')
        const listItem = document.createElement('li');
        listItem.setAttribute('id', attribId)

        listItem.appendChild(enteredGoalStrong)
        listItem.append(lineBreak)
        listItem.append(enteredGoalDesc)
        listItem.append(buttonDeleteItem)
        
        listEl.appendChild(listItem)
    }
    else
    {
        alert("Title cannot be empty")
    }

    // Reset values in form
    inputGoalEl.value = ''
    inputDescEl.value = ''
}

buttonEl.addEventListener('click', addGoal);