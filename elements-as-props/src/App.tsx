// import { useState } from 'react';

import { Error, Loading, Warning } from './components/loading';
import Button from './components/button';



//! in this way we can create miltiple button with diffrent icon also we can use other props for each components
export default function App() {
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {/* <Button isLoading={isLoading} /> */}
      <Button icon={<Loading />} />
      <Button icon={<Warning />} />
      <Button icon={<Error />} />
    </>
  );
}
