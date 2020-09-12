import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import BookList from '../components/BookList/BookList';

export default {
    title: 'BookList',
    component: BookList,
};

export const BookListStory = () =>
    <div style={{margin: '10px'}}>
      <BookList
      />
    </div>
;

BookListStory.story = {
    name: 'default',
};