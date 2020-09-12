import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import SignUpForm from '../components/SignUpForm/SignUpForm';

export default {
    title: 'SignUpForm',
    component: SignUpForm,
};

export const SignUpFormStory = () =>
    <div style={{margin: '10px'}}>
      <SignUpForm
      />
    </div>
;

SignUpFormStory.story = {
    name: 'default',
};