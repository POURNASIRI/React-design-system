import { SlowComponent } from './components/slow-component';
import { AdditionalComplexThings, BlaBla } from './components/dummy-components';
import { Button } from './components/button';
import { ModalDialog } from './components/modal-dialog';
import { useState } from 'react';

//! when click on open dialog button, modal dialog will appear with dellay of 5 seconds we whant to see why that is happening

//* when you click the button or when you click the close on the modal dialog,so consequently, opening the dialog takes almost a second because react has to rerender everything before the dialog can show up on the screen again.
export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>open Dialog</Button>
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
