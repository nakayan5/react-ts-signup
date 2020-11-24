// functional component props がない場合

import React from 'react';
import SignUp from './SignUp'
import Header from './components/Header/Header'




const App: React.FC = () => {
  return (
    <div>
        <Header />
        <div style={{marginTop: '2rem'}} />
        <SignUp />
    </div>
  );
}

export default App;
