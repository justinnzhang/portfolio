import React from 'react';

import './components.css';
import '../App.css';

const StickyNote = (props) => {
  return (
    <div className="sticky-note shadow-sm text-center mb-3">
      <p className="font-weight-light">{props.text}</p>
      {props.source !== null && <a href={props.source}>Source</a>}
    </div>
  );
};

export default StickyNote;
