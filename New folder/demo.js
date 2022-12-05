

/*document.getElementById('header-title').style.borderBottom='solid 3px #000'
document.getElementById('header-title').style.color='green';*/

/*var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++)
  items[i].style.fontWeight='bold';*/

/*var li=document.getElementsByTagName('li');
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow'
li[4].style.backgroundColor='yellow'*/

/*var header=document.querySelector('#main-header');
header.style.headerBottom='solid 4px #ccc';
var input=document.querySelector('input[type="submit"]');
input.value="send";

var item=document.querySelector('.list-group-item');
item.style.color='red';*/

var lastitem=document.querySelector('.list-group-item:last-child');
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display='none';


var items=document.querySelectorAll('.list-group-item');
items[1].style.color='black';
 var odd=document.querySelectorAll('li:nth-child(odd)');
for(i=0;i<odd.length;i++)
 odd[i].style.backgroundColor='green';
