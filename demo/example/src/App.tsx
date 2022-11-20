import './App.css';
import { DocumentViewer } from 'react-docs-renderer';

function App() {

  return (
    <div className='App'>

      <DocumentViewer file={'fileTest.pdf'} />
    </div>
  );
}

export default App;
