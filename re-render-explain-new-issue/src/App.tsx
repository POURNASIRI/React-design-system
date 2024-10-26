import { SlowComponent } from './components/slow-component';
import {
  AdditionalComplexThings,
  BlaBla,
} from './components/dummy-components';
import DynamicScroll from './components/dynamic-scroll';


//! if we do set state in app component this case our icon that work with state update worked slowly 

//* but when we use dynamic scroll component and then pass outher component as props our component that work with state will work without any problem


//* in this way these components are not actually declared or defined here, they are declared and defined in parrent component and they are only accessed with refrence to them 

export default function App() {
  return (
    <DynamicScroll
      content={
        <>
          <SlowComponent />
          <BlaBla />
          <AdditionalComplexThings />
        </>
      }
    />
  );
}


