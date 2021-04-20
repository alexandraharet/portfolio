import React from 'react';
import styles from './Venue.module.css';

const Venue: React.FC<{text: string}> = (props) => (
  <div className={styles.Venue}>
    <div className={styles.cTous}>
      <a href="https://www.espaigastronomia.cat/en/castell-de-tous/" target="_blank" className={styles.Button}>
      {props.text}
      </a>
    </div>
  </div>
);

export default Venue;
