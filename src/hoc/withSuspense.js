import React from 'react';

export const withSuspense = (Component) => {
  return (props) => {
    return <React.Suspense fallback={'...loading'}>
      <Component {...props} />
    </React.Suspense>
  }
}
