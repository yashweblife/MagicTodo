import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ListsStoreProvider from './store/ListsStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ListsStoreProvider>
    <App />
  </ListsStoreProvider>
)
