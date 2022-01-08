const explorer = document.querySelector('#content')
document.addEventListener('DOMContentLoaded', init());

// let back = '';
const table = document.createElement('table');
table.classList.add('table');
table.classList.add('dark');
table.style.color = '#CDD';
table.style.width = '90%';


function init(){
    fetch(`${API}drive/list?key=${KEY}`)
    .then(res=> res.json())
    .then (data=>{
        render(data);
    })
}

function cd(element){
    fetch(`${API}drive/list?key=${KEY}&path=${element.dataset.loc}`)
    .then(res => res.json())
    .then((data)=>{
        render(data);
    })
}

function back(path){
    return path.substring(0,path.lastIndexOf(DIR_SEP))
}

function render(data){
    table.innerHTML = '';
    let content = `<a onclick="cd(this)" data-loc="${back(data[2])}" style="cursor: pointer"> ^ UP </a> - ${data[2]}`;
    
    //Table Headers
    table.appendChild(buildRow(content, {colspan: 1}, true))
    //Directorios
    data[0].forEach(element => {
        content = `<a onclick="cd(this)" data-loc="${element.location}">${element.name}</a>`
        table.appendChild(buildRow(content));
    });
    //Ficheros
    data[1].forEach(element => {
        content = `<a onclick="view(this)" data-loc="${element.location}">${element.name}</a>`
        table.appendChild(buildRow(content));
    });
    explorer.appendChild(table);
}

function buildRow(content, attrs = false, header = false){
    let row = document.createElement('tr');
    if (header) row = document.createElement('th');
    let cell = document.createElement('td');
    if (attrs){
        for (let i = 0; i< Object.keys(attrs).length; i++){
            cell.setAttribute(Object.keys(attrs)[i],Object.values(attrs)[i]);
        }
    }
    cell.innerHTML = content
    row.appendChild(cell)

    return row;
}

function view(element){
    window.open(`${API}drive/viewFile?key=${KEY}&path=${element.dataset.loc}`, '_blank')
}