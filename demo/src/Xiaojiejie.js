import React, { Component } from 'react';
import XiaojiejieItem from './XiaojiejieItem';  
class Xiaojiejie extends Component{  
	constructor(props) {
	    super(props)
		this.state={
			inputValue:'jspang',
			list:['基础按摩','精油推背']
		} 
	}
	render(){
		return (  
			<div>
			   {/* 正确注释的写法 */}
               <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> <button onClick={this.addList.bind(this)}> 增加服务 </button></div>
               <ul> 
                   {
					   this.state.list.map((item,index)=>{
						   return ( 
                                <XiaojiejieItem 
								 key={index+item}  
								content={item}
								index={index}
								deleteItem={this.deleteItem.bind(this)}
								/>
						   )//不加（）的话就不可以换行
					   })
				   } 
               </ul>   
            </div> 
		)     
	}
	inputChange(e){
		/* console.log(e);  
		console.log(this); 
		console.log(e.target.value); */
		this.setState({
			inputValue:e.target.value 
		})
	} 
	addList(){
		this.setState({
			list:[...this.state.list,this.state.inputValue]
		})
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