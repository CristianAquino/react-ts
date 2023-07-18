import { useSelector } from "react-redux";
import { User } from "../../../redux/state/user";

const ComponentRedux2 = () => {
  const { user, email } = useSelector((store: User) => store.user);
  return (
    <div>
      Username:{user}, email: {email}
    </div>
  );
};
export default ComponentRedux2;
