import ReactDOM from 'react-dom';

function Modal({ children }) {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.createPortal(
      <div className="modal fixed z-[10] top-0 left-0 w-screen min-h-screen bg-[rgba(0,0,0,0.5)] overflow-hidden">
        <div className='modal-container bg-bg dark:bg-gray-900 dark:text-text-dark rounded my-[5%] mx-auto p-8 w-[400px] relative flex flex-col gap-[10px]'>
        {children}
        </div>
      </div>,
      modalRoot
    );
  }

export default Modal