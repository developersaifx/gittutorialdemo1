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

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'DOM 3';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor ='green';