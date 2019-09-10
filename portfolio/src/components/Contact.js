import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
import {formAction} from '../actions'

//TODO SEND EMAIL
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }
  handelChange = (event) => {
   let {target:{name,value}} = event
   this.setState({[name]: value})
   console.log(this.state)
  }
  handelSubmit = (event) => {
    event.preventDefault()
    this.props.formAction(this.state)
  }
    render() {
    return (
      <div className="contact">
        <form onSubmit={this.handelSubmit}>
          <input type="text" name="name" onChange={this.handelChange}></input>
          <input type="text" name="email" onChange={this.handelChange}></input>
          <input type="text" name="subject" onChange={this.handelChange}></input>
          <textarea name="message" onChange={this.handelChange}></textarea>
          <button type="submit" >Submit</button>
        </form>
      </div>
    );
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      formAction: (currentClass) => dispatch(formAction(currentClass)),
  
    }
  }

export default connect(null,mapDispatchToProps)(Contact)