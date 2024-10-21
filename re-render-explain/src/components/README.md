# Understanding component life cylcle

## Mounting
mounting happens when a component fist appears on your screen. During this phase,
react sets up the component for the fist time by initilizing its state, ecuting its hook, and adding elements to the DOM.The result is that the components output becomes visible on the screen.

## Unmounting
Then comes Unmounting, which occurs when react determines that a component is no longer necessary.In this phase. react performs a final cleanup, destroy the components instance and its associated elements like the components state, and remove the the DOM element.


## Re-rendering
This is when react updaties an existing component with new data.
Rerendring is more efficient than mounting because react reuse the existing copmponent instance,runs the hook again perform the necessary calculations and updates the DOM element with the new attributes. **State changes are the primaru drivers of Rerendering in react apps**
