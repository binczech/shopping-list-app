import React from 'react';
import { connect } from 'react-redux'
import Layout from '../components/layout'
import LandingPage from '../components/landingPage'
import ShoppingLists from './ShoppingLists'

const Home = ({loginData}) => {
  return loginData.loggedIn ? (
    <Layout>
      <ShoppingLists />
    </Layout>
  ) : (
    <Layout>
      <LandingPage />
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    loginData: state.login
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
