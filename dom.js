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
var header = document.querySelector('#main-header');
header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello world'

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child (2)');
secondItem.style.color = 'coral';

//QuerySelector All

