import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css' 
class Transition extends Component{   
	constructor(props) {
	    super(props)
		this.toToggole = this.toToggole.bind(this);
		this.state = {
			isShow:false
		}
	}
	render(){
		return (
			<div>
			  <CSSTransition 
			    in={this.state.isShow}
				timeout={2000}
				classNames="boss-text"
			   >
			    <div>Boss级别人物</div> 
			  </CSSTransition>
			  <div><button onClick={this.toToggole}>123123</button></div> 
			</div>
		)
	} 
	toToggole(){ 
		//debugger; 
		this.setState({
		    isShow:!this.state.isShow
		})
	}
}

export default Transition; 