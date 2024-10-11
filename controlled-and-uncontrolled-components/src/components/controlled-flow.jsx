import React from "react";


export const ControlledFlow = ({ children, onNext,currentStepIndex }) => {

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const next = (data) => {
    onNext(data);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return currentChild;
};
