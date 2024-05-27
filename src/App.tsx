import { Provider } from 'react-redux';
import { store } from './store/store';
import { Page } from './components/Page';
import { useSocket } from './hooks/useSocket';
import { useEffect } from 'react';

export function App() {
  const { createSocketConnection } = useSocket();

  useEffect(() => {
    createSocketConnection();
  }, []);

  return (
    <Provider store={store}>
      <Page></Page>
    </Provider>
  );
}
