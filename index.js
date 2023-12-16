
let id = 0;
/* Add references tio checkbox and button
Create block from form submission without checking box
Add event listener to update button's disabled state when checkbox is checked */

const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('myButton');
button.disabled = !checkbox.checked;
checkbox.addEventListener('change', () => {
    button.disabled = !checkbox.checked;
});

/* Add event listneer to button for form submission */
document.getElementById('myButton').addEventListener('click', () => {
    /* Get current date */
    let createdDate = new Date();
    /* Calculate future due date (2 weeks advance) */
    let dueDate = new Date(createdDate.getTime() + (14 * 25 * 60 * 60 * 1000));
    /* Format due date YYYY-MM-DD */
    let formattedDueDate = `${dueDate.getFullYear()}-${dueDate.getMonth() + 1}-${dueDate.getDate()}`;

    /*Get table, insert new row*/
    let table = document.getElementById('list');
    /*Add row IDw*/
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    /*Bring information in from HTML flile to fill cells*/
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-artist').value;
    row.insertCell(2).innerHTML = document.getElementById('new-album').value;
    row.insertCell(3).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()} `;
    row.insertCell(4).innerHTML = formattedDueDate;
    let actions = row.insertCell(5); 
    actions.appendChild(createDeleteButton(id++));  
});
/*Create delete button*/
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    /*Row is deleted with click event*/
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}