import { updateDataWithHoc } from "./update-data-with-hoc";


export const UserForm =updateDataWithHoc (
  ({ updatableUser, changeHandler, userPostHandler, resetUserHandler }) => {
    const { name, age } = updatableUser || {};

    return updatableUser ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => changeHandler({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            onChange={(e) => changeHandler({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={resetUserHandler}>Reset</button>
        <button onClick={userPostHandler}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "2"
);