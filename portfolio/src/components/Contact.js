import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
import {formAction} from '../actions'

//TODO SEND EMAIL
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'name',
      email:'email',
      subject:'subject',
      message:'message'
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
          <input value={this.state.name} type="text" name="name" onChange={this.handelChange}></input>
          <input value={this.state.email} type="text" name="email" onChange={this.handelChange}></input>
          <input value={this.state.subject} type="text" name="subject" onChange={this.handelChange}></input>
          <textarea value={this.state.message}name="message" onChange={this.handelChange}></textarea>
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