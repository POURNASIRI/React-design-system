import React, { useState } from 'react';
import { Button } from './button';
import { ModalDialog } from './modal-dialog';

export default function ToggleButton() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>open Dialog</Button>
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
    </>
  );
}
