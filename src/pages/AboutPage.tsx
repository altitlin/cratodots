import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Pafe information</h1>
      <p>Esse mollit consequat ad adipisicing laborum ut anim esse ea do amet.</p>
      <button className='btn' onClick={() => history.push('/')}>Go back to page home</button>
    </>
  );
};

export default AboutPage;
