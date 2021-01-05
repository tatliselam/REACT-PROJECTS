import React from 'react';


class Login extends React.Component {
  
  render() {
    
let login = (
  <div className="card">
        <form class="form-inline" action='#'>
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password"/>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
);

return (
  <div id="authorization">
    <h1>Enter the Password</h1>
    {login} 
  </div>
)
  }
}


export default Login;