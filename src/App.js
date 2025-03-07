import './App.css';
import firebaseApp from './firebase';
import { getFirestore } from 'firebase/firestore';

// Initialize Firestore
const db = getFirestore(firebaseApp);

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        {/* Sidebar content can go here */}
        <div style={{ padding: '20px' }}>
          <h3>Firebase Connected</h3>
          <p>Your app is now connected to Firebase project: test-app-9fb7e</p>
        </div>
      </div>
      <div className="main-content">
        {/* Main content area */}
      </div>
    </div>
  );
}

export default App;
