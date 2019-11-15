const defaultState = {
	inputValue : 'Write',
	list:[
		'1111',
		'222',
		'3333' 
	]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
console.log(state,action) 
	if(action.type==='changeInput'){
		let newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value; 
		return newState; 
	}
	if(action.type==='addItem'){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue=""; 
		return newState;  
	}
	if(action.type==='deleteItem'){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(newState.index,1); 
		return newState 
	} 
    return state
}  