//console.log(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.form);
//console.log(document.links);
//console.log(document.images);

//console.log(document.getElementById);



//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[2]);
//items[2].textContent = 'DOM 3';
//items[2].style.fontWeight = 'bold';
//items[2].style.backgroundColor ='green';

//GetELEMENTSBYTAGNAME
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li);
//li[1].textContent ='Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';


//for(var i=0; i < li.length; i++){
    //li[i].style.backgroundColor = '#f4f4f4';
//}

//QuerySelector 
//var header = document.querySelector('#main-header');
//header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world'

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child (2)');
// secondItem.style.color = 'coral';

//QuerySelector All
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

//Traversing the DOM
var itemList = document.querySelector('#items');
//Parent Node

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//Parent Element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.ChildNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementchild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementchild);
//itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement
//create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';

//Add id
newDiv.id ='hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);