// import { Loading } from "./loading";

// ! If we want to use another feature instead of loading, we will face problems.
//* change icon props with isLoading props
//!const Button = ({ isLoading }: { isLoading: boolean }) => {
//!return <button>submit {isLoading ? <Loading /> : null}</button>;
//!};

import { ReactElement } from 'react';

const Button = ({ icon }: { icon: ReactElement }) => {
    return <button>submit {icon}</button>
};

export default Button;
