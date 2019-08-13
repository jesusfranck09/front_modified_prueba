import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Input extends Component {

     constructor(props){
        super(props)
        this.state = {
            value: props.value
        }
    }

     componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({
                values: this.props.value
            })
        }
    }

     render() { 
        return ( 
            <React.Fragment>
            
                <div className='d-flex flex-column mb-2'>
                    <span 
                        className='mb-2'
                        htmlFor={this.props.id}>
                        {this.props.name}
                    </span>
                    <input id={this.props.id} type={this.props.type} 
                        className="validate"
                        value={this.props.value}
                        required={this.props.required}
                        onChange={this.props.setInput}/>
                </div>
            </React.Fragment>
         );
    }
}

 Input.protoTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setInput: PropTypes.func.isRequired,
    required: PropTypes.bool
}

 Input.defaultProps = {
    required: false
}

 export default Input;