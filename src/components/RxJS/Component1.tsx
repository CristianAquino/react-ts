// para este ejemplo este es el componente
// que emite la informacion
import { sharinInformationServices } from "../../services";

const Component1 = () => {
  const handleClick = () => {
    sharinInformationServices.setSubject(true);
  };

  const handleClickNo = () => {
    sharinInformationServices.setSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Information</button>
      <button onClick={handleClickNo}>Not Send Information</button>
    </div>
  );
};
export default Component1;
