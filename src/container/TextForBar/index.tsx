import { defineWidthBar } from 'helpers/defineWidthBar';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { useWindowSize } from 'hooks/useWindowSize';
import React from 'react';
import { getData, getTotalDataNumber } from 'store/data/selectors';
import styles from './index.module.scss';

const TextForBar = () => {
  const data = useAppSelector(getData);
  const totalNumber = useAppSelector(getTotalDataNumber);
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => {
        const widthCurrent = defineWidthBar(item.value, totalNumber, width);
        return (
          <div className={styles.wrapper_text} key={index}>
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
