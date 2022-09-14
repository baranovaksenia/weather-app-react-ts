import { GlobalSvgSelector } from '../../assets/img/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select';

interface Props {}

const options = [
  { value: 'city-1', label: 'Tel-Aviv' },
  { value: 'city-2', label: 'Haifa' },
  { value: 'city-3', label: 'Ashdod' },
];

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
    width: '194px',
    height: '37px',
    border: 'none',
    borderRadius: '10px',
    zIndex: 100,
  }),
};

export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <div>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
          />
        </div>
      </div>
    </header>
  );
};
