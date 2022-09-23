import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getData, getTotalDataNumber } from 'store/data/selectors';

const ProgressBar = () => {
  const data = useAppSelector(getData);
  const totalNumber = useAppSelector(getTotalDataNumber);

  console.log(totalNumber);

  return (
    <p>data</p>
  )
};

export default ProgressBar;