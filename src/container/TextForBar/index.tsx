import { defineWidthBar } from 'helpers/defineWidthBar';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getData, getTotalDataNumber } from 'store/data/selectors';
import styles from './index.module.scss';

const TextForBar = () => {
  const data = useAppSelector(getData);
  const totalNumber = useAppSelector(getTotalDataNumber);

  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        const widthCurrent = defineWidthBar(item.value, totalNumber);
        return (
          <div className={styles.wrapper_text}>
            <p>
              {item.name}: {item.value} ({widthCurrent} %)
            </p>
            <div
              style={{ backgroundColor: item.color }}
              className={styles.dot}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TextForBar;
