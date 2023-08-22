import { styled } from "styled-components";
import { BoxImage } from "../../../styles";

const UploadContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const LabelTitle = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #fff;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;
const ButtonsContainerUpload = styled.div`
  position: absolute;
  width: 100px;
  height: 24px;
  bottom: 8px;
  display: none;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.65);
  &.up,
  &.down,
  &.left,
  &.right {
    display: flex;
  }
`;
const ButtonIconActions = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const BoxUpluadImage = styled(BoxImage)`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  &:hover > ${ButtonsContainerUpload} {
    &.control {
      display: flex;
    }
  }
`;
const TargetUpload = styled.div`
  width: 100%;
  border: 1px dashed #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;
`;
const BodyUploadImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;
export {
  UploadContent,
  LabelTitle,
  ImageContainer,
  ButtonsContainerUpload,
  ButtonIconActions,
  BoxUpluadImage,
  TargetUpload,
  BodyUploadImage,
};
