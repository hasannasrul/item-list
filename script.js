var forms = document.getElementById('forms');
var itemValue = document.getElementById('itemValue');
var list = document.getElementById('list');

//Add items
forms.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    var value = itemValue.value;

    //creating item
    var newElement = document.createElement('li');
    newElement.className = "list-group-item";
    newElement.innerHTML = value;

    //creating delete button
    var button = document.createElement('button');
    button.className = "btn btn-danger float-right";
    button.innerText = 'X';

    // ading button to new element
    newElement.appendChild(button);

    //adding new element to list
    list.appendChild(newElement);

}

//Deleting the items

list.addEventListener('click', deleteItem);

function deleteItem(e) {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm("are you sure")) {
            var li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}

// searching items

var searchvalue = document.getElementById('searchValue');

searchvalue.addEventListener('keyup', tracing);

function tracing(e) {

    // lowercase
    var lower = e.target.value.toLowerCase();

    //li elements
    var listElement = list.getElementsByTagName('li');

    // Convert to an array
    Array.from(listElement).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(lower) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}