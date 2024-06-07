import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management System</h1>
      </header>

      
        <main>
            <StudentList/>
        </main>
    </div>
  );
}

export default App;
