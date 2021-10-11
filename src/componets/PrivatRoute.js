import React from 'react';
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'

const PrivatRoute = ({component : Component,...rest}) => {
    const user = useSelector(s => s.user.user)
    return (
     <Route
         {...rest}
         render={(props) => {
             if (user){
                 return <Component/>
             }else {
                 return  <Redirect to={{
                     pathname: '/login',
                     state:{ from: props.location}
                 }} />
             }
         }}

     />
    );
};

export default PrivatRoute;