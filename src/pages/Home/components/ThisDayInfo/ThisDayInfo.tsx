import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/img/cloud.png';
import ThisDayItem from './ThisDayItem';

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20 degrees feels like 17',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '765 mmHg - normal',
    },
    {
      icon_id: 'precipitation',
      name: 'precipitation',
      value: 'no precipitation',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 m/s southwest - light breeze',
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem
            item={item}
            key={item.icon_id}
          />
        ))}
      </div>
      <img
        src={cloud}
        alt='cloud'
      />
    </div>
  );
};
