import './styles/main.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './layouts/Header';
import { 
  DataPage, 
  TasksPage, 
  ReturnsPage, 
  CommunicationsPage, 
  BestFriendsPage 
} from './pages';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/datos" />} />
          <Route path="/datos" element={<DataPage />} />
          <Route path="/tareas" element={<TasksPage />} />
          <Route path="/devoluciones" element={<ReturnsPage />} />
          <Route path="/comunicaciones" element={<CommunicationsPage />} />
          <Route path="/mejores-amigos" element={<BestFriendsPage />} />
       </Routes>
    </div>
  );
}

export default App;

