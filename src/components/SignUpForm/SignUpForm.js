import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './SignUpForm.css';

export default function SignUpForm(props){
    return(
        <div className="container SignUpForm">
            <h2 className="mb-3">Sign Up</h2>
            <Form>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" name="text" id="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="Phone">Phone</Label>
                    <Input type="phone" name="phone" id="Phone" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="Password" />
                </FormGroup>
                <Button color="primary">Sign up</Button>
            </Form>
            <div className="mt-2">Already have an account? 
                <a href="#"> Log In</a>
            </div>
        </div>
    )
}