import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
import {formAction} from '../actions';



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
      let REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN
      let ACCESS_TOKEN = process.env.REACT_APP_ACCESSTOKEN

    return (
      <div className="contact" id="contact">
        {/* <div className="contact-header"></div>
        <div className="contact-body">
          <form onSubmit={this.handelSubmit}>
            <input value={this.state.name} type="text" name="name" onChange={this.handelChange}></input>
            <input value={this.state.email} type="text" name="email" onChange={this.handelChange}></input>
            <input value={this.state.subject} type="text" name="subject" onChange={this.handelChange}></input>
            <textarea value={this.state.message}name="message" onChange={this.handelChange}></textarea>
            <button type="submit" >Submit</button>
          </form>
        </div> */}
        <h2>Contact</h2>
        <h3>425-231-7962</h3>
        <h3>enprocopios@gmail.com</h3>
        <h3>linkedin.com/in/ix-procopios/</h3>
        <h3> github.com/ixnp</h3>
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