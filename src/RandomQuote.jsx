import { useState, useEffect } from 'react';
import './RandomQuote.css';
import twitterLogo from './assets/twt.png';
function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setQuote(data?.quote || 'No quote found');
      setAuthor(data?.author || 'Unknown author');
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  }

  return (  
    <div id="quote-box">
      <p id="text">{quote}</p>
      <span id="author">- {author}</span>
      <button className="btn" type="button" id="new-quote" onClick={getQuote}><span>New Quote </span></button>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`} id="tweet-quote" target="_blank" rel="noopener noreferrer">
        <img src={twitterLogo} id="twitter-logo" alt="Twitter Logo" />
      </a>
    </div>
  );
}

export default RandomQuote;

