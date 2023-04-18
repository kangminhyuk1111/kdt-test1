import Larva from './Larva';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  let i = 0;
  return <>
    <Larva />
    {i ? <ClassComponent /> : <FunctionComponent />}
  </>
    ;
}

export default App;
