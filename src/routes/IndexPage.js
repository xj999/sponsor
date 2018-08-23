import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Home from '../components/Home';
import  Pay  from "../components/Pay";
function IndexPage() {
  return (
    <div className={styles.normal}>
    
      <Home />
       <Pay />

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
