import { Button } from './button';
import { ModalDialog } from './modal-dialog';
import useToggle from '../hooks/useToggle';

//* if we use this hook in App component we can see when this hook state changed all the components re-render and the dialog will show up slowly

export default function ToggleButton() {
  const { visible, show, hide } = useToggle();
  return (
    <>
      <Button onClick={show}>open Dialog</Button>
      {visible ? <ModalDialog onClose={hide} /> : null}
    </>
  );
}
