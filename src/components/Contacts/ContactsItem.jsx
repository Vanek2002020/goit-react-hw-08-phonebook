import React from 'react';
import s from 'components/Contacts/ContactsItem.module.scss';
import PropTypes from 'prop-types';
import { BsFiles } from 'react-icons/bs';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.success('📎Copied to the clipboard!', {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

function ContactsItem({ id, name, number, deleteFunc }) {
  const textAreaRef = useRef(null);
  const renderNotification = () => {
    console.log('copied');
  };
  const copyToClipboard = async () => {
    const numberToCopy = textAreaRef.current.outerText;
    renderNotification();
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(numberToCopy);
    } else {
      return document.execCommand('copy', true, numberToCopy);
    }
  };

  return (
    <>
      <li key={id} className={s.ContactsItem}>
        <div className={s.ContactsItem__information}>
          <span className={s.ContactsItem__name}>{name}:</span>
          <span className={s.ContactsItem__number} ref={textAreaRef}>
            {number}
          </span>
          <button className={s.ContactsItem__copy} onClick={copyToClipboard}>
            <BsFiles />
          </button>
        </div>
        <button
          type="button"
          className={s.ContactsItem__button}
          onClick={() => deleteFunc(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  deleteFunc: PropTypes.func.isRequired,
};

export { ContactsItem };
