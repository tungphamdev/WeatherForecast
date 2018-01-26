/**
 *
 * Asynchronously loads the component for WeatherPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
