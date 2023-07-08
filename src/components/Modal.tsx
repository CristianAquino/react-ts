import "./Modal.css";

interface ModalProps {
  isOpenLogin: boolean;
  title: string;
  closeModal: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpenLogin, closeModal, title, children }: ModalProps) => {
  const handleModalDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`modal ${isOpenLogin && "modal-open"}`}
      onClick={closeModal}
    >
      <div className="modal__dialog" onClick={handleModalDialog}>
        <h1>{title.toUpperCase()}</h1>
        <button onClick={closeModal}>Close</button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
