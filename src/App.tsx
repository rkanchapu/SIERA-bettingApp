import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Router from './router';
import Footer from './components/Footer';

export interface Props {
  isLoading: boolean;
}

const App: React.FC<Props> = ({
  isLoading
}) => {
  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <div className="container pt-3">
        <Router />
      </div>
      <Footer />
    </div>
  );
}


export default App;
