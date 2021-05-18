import React from 'react'
import './Login.css'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField';
class Login extends React.Component{

    handleSubmit=(values)=>{
         alert("Login Clicked");
    }

    render(){
        return <div>

                <Formik
                    initialValues={{
                        email:'',
                        password:''
                    }}

                    validate={values=>{
                        const errors={};
                        if(!values.password){
                            errors.password="Password is required";
                        }
                        if(!values.email){
                            errors.email="Email is required";
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
                
                        <TextField id="email" label="Email" fullWidth/>
                        {props.errors.email}
                        </div>

                        <div className="form-group">
                
                        <TextField id="password" label="Password" type="password" fullWidth/>
                        {props.errors.password}
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg btn-block" id="sbutton">Login</button>
                    </div>
                </form>
                    )
                    

                }
                </Formik>
                
            </div>
    }
}

export default Login