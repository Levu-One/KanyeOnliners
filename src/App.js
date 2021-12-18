import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import QuoteList from './components/QuoteList';
import useQuotes from './useQuotes';

function App() {

  const {loadQuote} = useQuotes()
  useEffect(() => {
    loadQuote()
  }, [])

  return (
    <div className="appi">
      <Header appname="Kanye Onliners"/>

      <Filter  />
      
      <QuoteList />
    </div>
  );
}

export default App;
