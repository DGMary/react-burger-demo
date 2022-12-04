import React, { useState, useEffect } from 'react';

const asyncComponent = (importComponent:any) => {
  return function(props:any) {

    const [state, setState] = useState<any>({component: null});

    useEffect(() => {
      importComponent().then((cmp:any) => {
        setState({ component: cmp.default });
      });
    }, []);
  

    const C:any = state.component;
    return C ? <C {...props} /> : null;
    
  };
};

export default asyncComponent;
