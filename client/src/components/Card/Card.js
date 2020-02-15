import React,{Fragment,useState} from 'react';
import "./Card.css"

const Card = props => {
    const flip = "flip"
    const [clicked,setClicked] = useState();

    const onclick = (e)=>{
        e.preventDefault();
        console.log('clicked')
        setClicked(true)
      }
  return (
      <Fragment>
      
      <div class="thecard">

          <div className={'thefront '+ (clicked?flip:'')} >
          <form className='form-container'>
            <h1>{props.title}</h1>
            {props.firstName}
            {props.lastName}
            {props.userName}
            {props.email}
            {props.password}
            {props.registerBtn}
            <h5 className="reg">
            Not a member? <a onClick={onclick}>Register!</a>{' '}
          </h5>
            </form>
          </div>
        
        <div class='theback'>
          
        </div>
        </div>
    </Fragment>
  );
};

export default Card;
