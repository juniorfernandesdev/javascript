var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar javascript',
    'acessar comunidade rocketseat'
];

function renderTodo () {
    listElement.innerHTML = '';
    //for especifico para array
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodo(); 

function addTodo () {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodo();

}
//pos = recebe posição
function deleteTodo (pos) {
    //splice remove quantidade de items do array
    todos.splice(pos, 1);
    renderTodo();
}

buttonElement.onclick = addTodo;