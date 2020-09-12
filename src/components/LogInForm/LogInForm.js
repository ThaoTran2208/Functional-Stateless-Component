import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './LogInForm.css';

export default function LogInForm(props){
    return(
        <div className="container LogInForm">
            <h2 className="mb-3">Log In</h2>
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="Password" />
                </FormGroup>
                <Button color="primary">Log in</Button>
            </Form>
            <div className="mt-2">New to Book Manager? 
                <a href="#"> Sign Up</a>
            </div>
        </div>
    )
}