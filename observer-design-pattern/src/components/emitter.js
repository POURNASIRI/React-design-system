import mitt from "mitt";

//*what is mitt : 
//*The mitt library is a tiny, fast event emitter that can be used in React applications for managing custom events. It's a great choice for lightweight event handling due to its simplicity and small size.
//*Use Cases in React
//*Component Communication: Useful for communicating between components that do not have a direct parent-child relationship.
//*Global Events: Manage global events without relying on context or Redux for simple cases.

export const emitter = mitt(); 