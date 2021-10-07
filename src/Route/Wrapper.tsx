import React,{useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import {User} from '../Interface/Game'
import{RootState} from '../Store/index'
interface RouterProps{
    redirectTo:string,
    isPrivate:Boolean,
    component:any,
    rest:Object,
}
const RouteWrapper:React.FC<any>=({redirectTo, isPrivate, component: Component, ...rest}) =>{
  
  const authenticated:User = useSelector((state:RootState) => state.user.user)
  const reset:User = useSelector((state:RootState) => state.reset.user)
  if(rest.path=='/resetPassword'){
      if(reset){
        return <Route {...rest} render={props => <Component {...props} />} />;
      }else{
        return <Redirect to={redirectTo} />;
      }
  }
  if (!!authenticated.token && !isPrivate){
    return <Redirect to={redirectTo} />
  }
  if(!!authenticated.token && isPrivate){
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  if(!authenticated.token && isPrivate){
    return <Redirect to={redirectTo} />;
  }
  if(!authenticated.token && !isPrivate){
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
  
}
RouteWrapper.defaultProps = {
    redirectTo: '/',
    isPrivate: false,
};


export default RouteWrapper;