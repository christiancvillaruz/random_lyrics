import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Quotes = () => {
  const [lyrics, setLyrics] = useState('');
  const [song, setSong] = useState('');
  const [album, setAlbum] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = 'https://gist.githubusercontent.com/christiancvillaruz/e51c5d650532f2a75ab311d117e775ed/raw/17536700b6dc0cb5d49d1107914abec15e2c1f11/tslyrics.json';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataLyrics = data.lyrics;
        let randomNum = Math.floor(Math.random() * dataLyrics.length);
        let randomLyrics = dataLyrics[randomNum];
        
        setLyrics(randomLyrics.lyric);
        setSong(randomLyrics.song);
        setAlbum(randomLyrics.album);
      });
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div id="lyric-box">
      <div id="text">
        <p>{lyrics}</p>
      </div>
      <div id="song">
        <p>{song}</p>
      </div>
      <div id="author">
        <p>Ariana Grande</p>
      </div>
      <div id="album">
        <p>From the album "{album}"</p>
      </div>
      <div id="buttons">
        <div className="social-media">
          <a href="#" id="tweet-lyrics">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
        <button onClick={handleClick} id="new-lyrics">New Lyrics</button>
      </div>
    </div>
  );
}

export default Quotes;