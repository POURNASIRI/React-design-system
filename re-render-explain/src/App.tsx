import { SlowComponent } from './components/slow-component';
import { AdditionalComplexThings, BlaBla } from './components/dummy-components';
import { Button } from './components/button';
import { ModalDialog } from './components/modal-dialog';
import { useState } from 'react';

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
