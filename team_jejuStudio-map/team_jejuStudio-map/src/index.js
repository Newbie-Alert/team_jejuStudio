import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import KakaoMap from './pages/kakaomap/Kakaomap';

const root = createRoot(document.getElementById('root'));
root.render(<>
  {/* <App/>  */}

  
    <KakaoMap />
  </>,
);
reportWebVitals();
