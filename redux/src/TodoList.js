import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd' 
import store from './store'
import {CHANGE_INPUT,ADD_ITEM,DELTE_ITEM} from './store/actionTypes.js'
class TodoList extends Component{ 
	constructor(props) {
	    super(props);
		console.log(store.getState())
		this.state = {
			...store.getState()
		}
		console.log(this.state); 
		this.changeInputValue = this.changeInputValue.bind(this);
		this.storeChange = this.storeChange.bind(this);
		this.clickBtn = this.clickBtn.bind(this); 
		//this.delteItem = this.delteItem.bind(this);
		store.subscribe(this.storeChange)
	}
	render(){   
		return (
		   <div>
			<div> 
				<Input placeholder={this.state.inputValue} 
				style={{width:'250px'}} 
				onChange={this.changeInputValue}
				value={this.state.inputValue} 
				/>  
				<Button type="primary"
				 onClick={this.clickBtn}
				>add</Button>
			</div>
			<div style={{margin:'10px',width:'300px'}}>  
			    <List
                        bordered
                        dataSource={this.state.list} 
                        renderItem={(item,index)=>(<List.Item onClick={this.delteItem.bind(this,index)}>{item}</List.Item>)}
                    /> 
			</div>   
		   </div>
		)   
	}
	changeInputValue(e){
		const action ={
			type:CHANGE_INPUT,
			value:e.target.value
		}
		store.dispatch(action);   
	} 
	storeChange(){
		this.setState(store.getState())
	}
	clickBtn(){
		const action = {
			type:ADD_ITEM,
		}
		store.dispatch(action)
	}
	delteItem(index){ 
		console.log(index); 
		const action = {
			type:DELTE_ITEM,
			index 
		} 
		store.dispatch(action)
	}
} 
export default TodoList  