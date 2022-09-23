import { defineWidthBar } from 'helpers/defineWidthBar';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { useWindowSize } from 'hooks/useWindowSize';
import React from 'react';
import { getData, getTotalDataNumber } from 'store/data/selectors';
import styles from './index.module.scss';
import Item from './Item';

const ProgressBar = () => {
  const data = useAppSelector(getData);
  const totalNumber = useAppSelector(getTotalDataNumber);
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => {
        const widthCurrent = defineWidthBar(item.value, totalNumber, width);

        return (
          <div
            className={styles.wrapper_item}
            style={{
              width: widthCurrent,
            }}
            key={index}
          >
            <Item color={item.color} width={widthCurrent} />
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
