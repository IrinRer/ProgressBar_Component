import { defineWidthBar } from 'helpers/defineWidthBar';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getData, getTotalDataNumber } from 'store/data/selectors';
import styles from './index.module.scss';
import Item from './Item';

const ProgressBar = () => {
  const data = useAppSelector(getData);
  const totalNumber = useAppSelector(getTotalDataNumber);

  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        const widthCurrent = defineWidthBar(item.value, totalNumber);

        return (
          <div
            className={styles.wrapper_item}
            style={{
              width: widthCurrent,
            }}
          >
            <Item color={item.color} width={widthCurrent} />
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
