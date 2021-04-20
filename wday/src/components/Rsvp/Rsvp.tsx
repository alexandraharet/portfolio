import React from 'react';
import styles from './Rsvp.module.css';

const Rsvp: React.FC<{text: string}> = (props) => (
  <div className={styles.Rsvp}>
    <a href="https://forms.gle/G9k8RFYvxvp6cvuW9" target="_blank" className={styles.Button}>{props.text}</a>
  </div>
);

export default Rsvp;
