import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import LogInForm from '../components/LogInForm/LogInForm';

export default {
    title: 'LogInForm',
    component: LogInForm,
};

export const LogInFormStory = () =>
    <div style={{margin: '10px'}}>
      <LogInForm
      />
    </div>
;

LogInFormStory.story = {
    name: 'default',
};