import React from 'react'
import './Registration.css'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField';
class Register extends React.Component{

    handleSubmit=(values)=>{
         alert("Register Clicked");
    }

    render(){
        return <div>

                <Formik
                    initialValues={{
                        name:'',
                        email:'',
                        password:'',
                        cpassword:''
                    }}

                    validate={values=>{
                        const errors={};
                        if(!values.name){
                            errors.name="Name is required";
                        }
                        if(!values.password){
                            errors.password="Password is required";
                        }
                        if(!values.email){
                            errors.email="Email is required";
                        }
                        if(!values.cpassword){
                            errors.cpassword="Confirm password is required";
                        }
                        return errors;
                    }

                    }

                    onSubmit={(values=>{
                        this.handleSubmit(values)
                    })}
                >
                {

                    (props)=>(<form onSubmit={props.handleSubmit}>
                    <div className="container">

                        <div className="form-group">

                        <TextField id="name" label="Name" fullWidth/>
                        {props.errors.name}
                        </div>
            
                        <div className="form-group">
                
                        <TextField id="email" label="Email" fullWidth/>
                        {props.errors.email}
                        </div>

                        <div className="form-group">
                
                        <TextField id="password" label="Password" type="password" fullWidth/>
                        {props.errors.password}
                        </div>

                        <div className="form-group">
                
                        <TextField id="cpassword" label="Confirm Password" type="password"fullWidth/>
                        {props.errors.cpassword}
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg btn-block" id="sbutton">Register</button>
                    </div>
                </form>
                    )
                    

                }
                </Formik>
                
            </div>
    }
}

export default Register