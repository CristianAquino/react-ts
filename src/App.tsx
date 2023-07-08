import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const App = () => {
  const [isOpenLogin, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChat, openChatModal, closeChatModal] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <Modal
        isOpenLogin={isOpenLogin}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
      </Modal>
      <Modal isOpenLogin={isOpenChat} closeModal={closeChatModal} title="Chat">
        <p>
          Hola!! <b>-Cristian</b>
        </p>
        <p>
          Que hace :v <b>-Maria</b>
        </p>
      </Modal>
    </div>
  );
};
export default App;
