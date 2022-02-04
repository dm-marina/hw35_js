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
    let ul = '<ul>\n';

    for(let i=0; i<arr.length; i++){
        let row = arr[i];

        if(Array.isArray(row)){
            ul+=`<li>`+ `${generateList(row)}`+ `</li>\n`;
        }
        else{
            ul+=`<li>`+ `${row}`+`</li>\n`;
        }
    }
    ul+='</ul>\n';
    
    return ul;
}
console.log(generateList([1,2, 3,[4, 5, 6]]))

function createTable(){
    let cell = 10;
    let arr= new Array(cell);
    
    for(let i=0; i<cell; i++){
        arr[i] = new Array(cell)
        for(let j=0; j<cell; j++){
            arr[i][j] = i*10+j+1

            document.write(arr[i][j]+' ');
        }
        document.write('</br>');
    }

}
console.log(createTable());
