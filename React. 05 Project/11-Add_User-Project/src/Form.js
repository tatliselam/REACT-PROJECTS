import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            job: ''
        };
    }

    render() {
        const { name, job } = this.state; 
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                     />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
