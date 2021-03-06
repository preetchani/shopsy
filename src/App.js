import React from 'react';
import { Switch,Route,Redirect } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
  
    unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    //onAuthStateChanged will return firbase unsubscribe function which once called will be used to unsubscribe or signout the user
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
        </Switch>
       
      </div>
    );
  }
  
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
