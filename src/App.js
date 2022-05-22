import { BrowserRouter as Router } from 'react-router-dom';

import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <Router>
      <PublicRoutes/>
    </Router>
  );
}

export default App;
