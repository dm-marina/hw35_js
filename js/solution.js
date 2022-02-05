function getAttrName(){
    const ul = document.querySelector('ul');
    let arr =[]
    for(let atr of ul.getAttributeNames()){

        arr.push(atr);             
    }
    return arr;
}
console.log(getAttrName());

function getAttrValue(){
    let arrValue =[];
    for(let attr of ulId.attributes ){
        attr.name = attr.value;
        arrValue.push(attr.value);
    }
    return arrValue;
}
console.log(getAttrValue())

let a = 'Марина'
const ul = document.querySelector('ul');
ul.lastElementChild.innerHTML = `Привет, меня зовут ` + `${a}`;
console.log(ul);


const li = document.querySelector('li')
li.setAttribute('data-my-name', 'Марина');
console.log(li.getAttributeNames());
console.log(li.getAttribute('data-my-name'))

ul.removeAttribute('data-dog-tail');
console.log(ul.getAttributeNames());


function generateList(arr){
    const listWrap = document.querySelector('.ulList');

    function createList(arr){
        let list = document.createElement('ul');
        for(let i=0; i<arr.length; i++){
            const li = document.createElement('li');

            if(Array.isArray(arr[i])){
                li.append(createList(arr[i]));
            }
            else{
                li.innerHTML=arr[i];
            }
            list.append(li);
        }
        return list;
    }
    listWrap.append(createList(arr));
}
generateList([1,2, 3,[4, 5, 6]]);

function generateTable(){
    const tableWrap= document.querySelector('.tableList')
    function createTable(){
        let cell = 10;
        let arr = new Array(cell);
        const table = document.createElement('table');

        for(let i=0; i<10;i++){
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for(let j=0;j<10;j++){
                let td = document.createElement('td');
                arr[j]=new Array(cell)
                tr.appendChild(td)
                for(let k=0;k<cell;k++){
                    arr[j][k] =i*10+j+1;
                    td.innerHTML = arr[j][k]
                }
            }
        }
        return table;
    }
    tableWrap.append(createTable());
}
generateTable();
