import React from 'react'
import useAuth from '../../context/useAuth'
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const { users, isLoading } = useAuth()
    if (isLoading) {
        return (
           <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
           </div>
        )
    }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            users?.email ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   )
}
