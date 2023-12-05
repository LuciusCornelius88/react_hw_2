import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppFeedback from 'components/App_feedback';
import AppPhonebook from 'components/App_phonebook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPhonebook />
  </React.StrictMode>
);
