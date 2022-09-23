import React from 'react';
import styles from '../index.module.scss';

interface IProps {
  width: number;
  color: string;
}

const Item: React.FC<IProps> = ({ width, color }) => {
  const widthItem = 20;
  let totalWidth = width;
  const countDiv: Array<React.ReactElement> = [];

  const defineNumberItem = () => {
    while (totalWidth - widthItem > 0) {
      totalWidth -= widthItem;
      countDiv.push(
        <div
          style={{
            width: widthItem,
            height: 30,
            backgroundColor: color,
          }}
          className={styles.line}
          key={totalWidth}
        />,
      );
    }

    countDiv.push(
      <div
        style={{
          width: widthItem,
          height: 30,
          backgroundColor: color,
        }}
        className={styles.line}
        key={totalWidth}
      />,
    );
  };

  defineNumberItem();

  return <>{countDiv.map((item: React.ReactElement) => item)}</>;
};

export default Item;
