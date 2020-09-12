import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/Navbar/Header';

export default {
    title: 'Header',
    component: Header,
};

export const HeaderStory = () =>
    <div style={{margin: '10px'}}>
      <Header
      />
    </div>
;

HeaderStory.story = {
    name: 'default',
};