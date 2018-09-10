import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	
		if(isSignedIn){
		return(
		<nav style = {{ display: 'flex' , justifyContent : 'flex-end'}} >
			<p 
			onClick = {() => {onRouteChange('signout')}} 
			className = 'f3 link dim black underline pa0 mt1 pointer'>Sign Out</p>
		</nav>);
	}
	else{
		return(
		<nav style = {{ display: 'flex' , justifyContent : 'flex-end'}} >
			<p 
			onClick = {() => {onRouteChange('Signin')}} 
			className = 'f3 link dim black underline pa0 pr4 mt1 pointer'>Sign in</p>
			<p 
			onClick = {() => {onRouteChange('Register')}} 
			className = 'f3 link dim black underline pa0 pr1 mt1 pointer'>Register</p>
		</nav>);
	}
}
export default Navigation;