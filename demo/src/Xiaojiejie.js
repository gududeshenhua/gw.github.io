import React, { Component } from 'react';
import XiaojiejieItem from './XiaojiejieItem';  
import Transition from './Transition'; 
import {CSSTransition,TransitionGroup} from 'react-transition-group'; 
import './style.css'
class Xiaojiejie extends Component{  
	//在某一时刻 可以自动执行的函数
	constructor(props) {
	    super(props)
		this.state={
			inputValue:'jspang',
			list:['基础按摩','精油推背']
		} 
	}
	componentWillMount(){
		console.log('1componentWillMount---组件将要挂到页面的时刻')
	}
	componentDidMount(){
		console.log('2componentDidMount---组件完成到页面的时刻')
	}
	shouldComponentUpdate(){
		console.log('3shouldComponentUpdate');
		return true;  
	}
	componentDidUpdate(){
		console.log('F') 
	}
	
	render(){
		console.log('4render---组件完成到页面的时刻')
		return (   
			<div>
			   {/* 正确注释的写法 */}
               <div>
			   <input  
			    value={this.state.inputValue} 
			    onChange={this.inputChange.bind(this)}
				ref={(input)=>{this.input=input}}
			   />  
			   <button onClick={this.addList.bind(this)}> 增加服务 </button></div>
               <ul ref={(ul)=>{this.ul = ul}}> 
			       <TransitionGroup>
					   {
						   this.state.list.map((item,index)=>{
							   return ( 
							       <CSSTransition
								     timeout={2000}
									 classNames="boss-text"
									 unmountOnExit 
									  key={index+item}  
								    >
									<XiaojiejieItem  
									content={item}
									index={index}
									deleteItem={this.deleteItem.bind(this)}
									avname="111" 
									/>
								   </CSSTransition>
							   )//不加（）的话就不可以换行 
						   })
					   }  
				   </TransitionGroup>
               </ul>   
			   <Transition/> 
            </div> 
		)     
	} 
	inputChange(e){
		/* console.log(e);  
		console.log(this); 
		console.log(e.target.value); */
		this.setState({
			inputValue:this.input.value 
		})
	} 
	addList(){
		this.setState({
			list:[...this.state.list,this.state.inputValue]
		},()=>{
			console.log(this.ul.querySelectorAll('li').length); 
		});//这是一个异步的方式 回调函数想当于vue $nextTick
	}  
	deleteItem(index){
		let list = this.state.list;
		list.splice(index,1); 
		this.setState({
			list:list
		})
	}
}
export default Xiaojiejie