import ProgressBar from 'container/ProgressBar';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { fechDataAction } from 'store/data/thunk';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fechDataAction());
  }, [dispatch]);
  
  return <ProgressBar/>;
};

export default App;
