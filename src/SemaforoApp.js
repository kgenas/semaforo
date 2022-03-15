import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppBody } from './components/AppBody';

export const SemaforoApp = () => {
  return (
    <Provider store={ store }>
        <AppBody/>
    </Provider>
  );
};
