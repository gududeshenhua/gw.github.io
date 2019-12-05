/* import _ from 'lodash'; */
import './style.css'; 
import Icon from './icon.png';
import printMe from './print.js'
function component(){
	var element = document.createElement('div');
	element.innerHTML = 'hello webpack'; 
	element.classList.add('hello'); 
	console.log('?????????????');  
	var btn = document.createElement('button');
	btn.innerHTML ='Click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn); 
	//将图像添加到我们现有的 div。
   /* var myIcon = new Image();
   myIcon.src = Icon;  
    element.appendChild(myIcon);  */ 
	
	
	return element;  
} 

document.body.appendChild(component()) 