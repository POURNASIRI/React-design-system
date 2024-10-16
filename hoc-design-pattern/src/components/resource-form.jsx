import { genericHocForGetData } from "./generic-hoc-for-get-data";
// import { updateDataWithHoc } from "./update-data-with-hoc";


export const ResourceForm = genericHocForGetData (
  ({ resource, onChange ,onPost,onReset  }) => {
    
    
   const {user} = resource || {};

    const { name, age } = user || {};

    return resource ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            onChange={(e) => onChange({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onReset}>Reset</button>
        <button onClick={onPost}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/1","user"
);
