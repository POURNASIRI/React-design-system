import { SlowComponent } from './components/slow-component';
import { AdditionalComplexThings, BlaBla } from './components/dummy-components';
import ToggleButton from './components/toggle-button';

//! when click on open dialog button, modal dialog will appear with dellay of 5 seconds we whant to see why that is happening

//* when you click the button or when you click the close on the modal dialog,so consequently, opening the dialog takes almost a second because react has to rerender everything before the dialog can show up on the screen again.

//* solution: use ToggleButton and move state in to this component when the Button open dialog is clicked, the state updates still happens, but now only the components within the toggle button with dialog component re render.
export default function App() {
  return (
    <>
      <ToggleButton />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
