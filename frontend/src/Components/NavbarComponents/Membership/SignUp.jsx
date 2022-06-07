import React from "react";
import Form from "./Form";


function SignUp(props) {

  const Data_Values= (values)=>{
    props.Data_(values);

  }

  return (
    <div>
      <div >
        <div>
          <Form Data_={Data_Values}/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
