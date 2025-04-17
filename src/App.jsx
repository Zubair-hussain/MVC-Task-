import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { getSEOContent } from './controllers/seoController';
import SEOView from './views/SEOView';



const App = () => {

  const content = getSEOContent();
  return (
    <div>
      <h1>React MVC Demo</h1>
     
      <AppRoutes />
      <hr />

      <div>
      <SEOView content={content} />
    </div>
    </div>
  );
};

export default App;
