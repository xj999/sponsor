import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Home from '../components/Home';
import  Pay  from "../components/Pay";
import PersonInfo from '../components/PersonInfo';
function IndexPage() {
  return (
    <div className={styles.normal}>
      <PersonInfo/>
      <Home />
      

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
