import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Header';
import BookList from './components/BookList/BookList';
import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <BookList />
      <LogInForm />
      <SignUpForm />
    </div>
  );
}

export default App;
