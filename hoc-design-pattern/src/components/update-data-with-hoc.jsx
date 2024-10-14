import { useEffect, useState } from "react";
import axios from "axios";

export const updateDataWithHoc = (Component, userId) => {
  return (props) => {
    // initial state for initial user that fetch for first time 
    const [user, setUser] = useState(null);

    // state for update user after edit
    const [updatableUser, setUpdatableUser] = useState(null);


    // fetch user for first time
    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        console.log(response.data);
        setUser(response.data);
        setUpdatableUser(response.data);
      })();
    }, []);


    // update user
    const userChangeHandler = (updates) => {
      setUpdatableUser({ ...updatableUser, ...updates });
    };


    // post user
    const userPostHandler = async () => {
      const response = await axios.post(`/users/${userId}`, {
        user: updatableUser,
      });
      setUser(response.data);
      setUpdatableUser(response.data);
    };

    // reset user
    const resetUserHandler = () => {
      setUpdatableUser(user);
    };

    return (
      <Component
      {...props}
      updatableUser={updatableUser}
      changeHandler={userChangeHandler}
      userPostHandler={userPostHandler}
      resetUserHandler={resetUserHandler}
      />
    );
  };
};
