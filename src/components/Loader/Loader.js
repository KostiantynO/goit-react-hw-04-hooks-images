import css from './Loader.module.css';

import { ThreeDots } from 'react-loading-icons';

export const Loader = () => (
  <div className={css.Wrapper}>
    <ThreeDots
      className={css.Loader}
      style={{
        stroke: '#212121',
        color: '#212121',
        fill: '#212121',
      }}
    />
  </div>
);
