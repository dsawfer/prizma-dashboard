import './App.css';
import { api } from './services/api/Api';

export function App() {
  return <>{`Connection: ${api.status()}`}</>;
}
