//Traversing the DOM
 var listItem= document.querySelector('#items');
 console.log(listItem.parentNode);

 listItem.parentNode.style.backgroundColor='#f4f4f4';

 console.log(listItem.parentNode.parentNode);

//parentELement
   var listItem= document.querySelector('#items');
   console.log(listItem.parentElement);

  listItem.parentElement.style.backgroundColor='#f4f4f4';

  console.log(listItem.parentElement.parentElement);


//childNode
 console.log(listItem.childNodes);

 console.log(listItem.children);

 console.log(listItem.children[1]);
 listItem.children[1].style.backgroundColor='yellow';


//FirstChild
 console.log(listItem.firstChild);

//firstElementChild
 console.log(listItem.firstElementChild);
 listItem.firstElementChild.textContent='Hello';



//lastChild
 console.log(listItem.lastChild);

//lastElementChild
  console.log(listItem.lastElementChild);
  listItem.lastElementChild.textContent='Hello';


 //nextSibling
 console.log(listItem.nextSibling);


 //nextElementSIbling

 console.log(listItem.nextElementSibling);

 //previousSibling
  console.log(listItem.previousSibling);

 //previousElementSibling
  console.log(listItem.previousElementSibling);

  listItem.previousElementSibling.style.color='green';

 //createElement
 //create a div

  var newDiv = document.createElement('div');
  console.log(newDiv);

 //add className
  newDiv.className='hello';

 //add id
  newDiv.id='welcome';

 //setAttribute
  newDiv.setAttribute('title','hello Div');

 //create text node

  var newtextdiv=document.createTextNode('Hello World');

 //Add text to div
  newDiv.appendChild(newtextdiv);



  var container = document.querySelector('header .container');
  var h1 = document.querySelector('header h1');

  console.log(newDiv);
 newDiv.style.fontSize='30px';
  container.insertBefore(newDiv,h1);


//Now go head and add HEllo word before Item Lister
parentNode=document.getElementById('items')

//helloworldlielement = <li>Hello world)

//parentNode.appendFirstChild(helloworldlielement)
parentNode.innerhtml=  '<li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li>'
 parentNode.innerhtml = '<li class="list-group-item">Hello word</li>' + parentNode.innerhtml