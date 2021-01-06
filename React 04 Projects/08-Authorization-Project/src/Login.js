import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
  authorized:false,
  count:1,

    }
    this.userCheck=this.userCheck.bind(this)
  }
  userCheck(){
  if(document.querySelector('.form-control').value === '123') {
    this.setState({
      authorized:true
    })
  } else{
    alert('your password is incorrecto')
    this.setState({
      count :  this.state.count +1
    })
    if(this.state.count === 3){
      document.querySelector('.form-control').disabled = true 
      document.querySelector('.btn').disabled = true 
      setTimeout(()=>{
        document.querySelector('.form-control').disabled = false
      document.querySelector('.btn').disabled = false
      },3000)
    }
  }
  }
  render() {

let login = (
  <div className="card">
        <form class="form-inline" action='#'>
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password"/>
            <button type="submit" class="btn btn-primary" onClick = {this.userCheck}>Submit</button>
          </div>
        </form>
      </div>
);
let contact =(
  <div className = 'card'>
  <div className='top'>
    <h2 className = 'name'>
{this.props.user.name}
    </h2>
    <img className = 'circle-img' src= {this.props.user.imgURL} />
    </div> 
<div className= 'bottom'>
  <p className='info'>
    email: {this.props.user.mail}
    
  </p>
  <p className='info'>
    phone: {this.props.user.phone}
    
  </p>
</div>
    
  
  </div>
)
return (
  <div id="authorization">
    <h1>Enter the Password</h1>
    {this.state.authorized === false ? login : contact} 
  </div>
)
  }
}


export default Login;