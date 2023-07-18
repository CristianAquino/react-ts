import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/state/user";

const ComponentRedux1 = () => {
  const dispatch = useDispatch();

  const handleClick1 = () => {
    dispatch(createUser({ user: "test", email: "test@testing.com" }));
  };

  const handleClick2 = () => {
    dispatch(modifyUser({ email: "testNew@testing.com" }));
  };

  const handleClick3 = () => {
    dispatch(resetUser());
  };

  return (
    <div>
      <button onClick={handleClick1}>Create User</button>
      <button onClick={handleClick2}>Modify User</button>
      <button onClick={handleClick3}>Reset User</button>
    </div>
  );
};
export default ComponentRedux1;
