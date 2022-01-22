import React, {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiX } from '@react-icons/all-files/hi/HiX';
import classNames from 'classnames';

import Button from 'atoms/Button';
import Container from 'atoms/Container';

import { isBrowser } from 'utils/browser';

import { ModalProps } from './models.d';

import './Modal.scss';

const Modal: FC<ModalProps> = forwardRef(({ children, isOpen }, ref) => {
  const bodyElement = isBrowser() ? window.document.body : null;
  const modalElement = isBrowser() ? document.getElementById('modal-root') : null;
  const [isModalOpen, setIsModalOpen] = useState<boolean | undefined>(isOpen);
  const [isFadeOut, setIsFadeOut] = useState<boolean | undefined>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const modalClasses = classNames('modal', { 'modal--fade-out': isFadeOut });

  const close = useCallback(() => {
    setIsFadeOut(true);
    setTimeout(() => {
      if (bodyElement) bodyElement.classList.remove('scroll--prevent');
      setIsModalOpen(false);
      setIsFadeOut(false);
    }, 600);
  }, [bodyElement]);

  const open = useCallback(() => {
    if (bodyElement) bodyElement.classList.add('scroll--prevent');
    setIsModalOpen(true);
  }, [bodyElement]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [close, open]
  );

  const onEscPress = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  const onClickOutside = useCallback(
    (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', onEscPress, false);
      document.addEventListener('click', onClickOutside, true);
    }

    return () => {
      document.removeEventListener('keydown', onEscPress, false);
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [onEscPress, isModalOpen, isOpen, onClickOutside]);

  if (!modalElement) return null;

  const renderModal = isModalOpen ? (
    <Container variant="fluid" className={modalClasses} data-testid="modal-item">
      <Container
        innerRef={contentRef}
        gutter={false}
        className="modal__content background--white shadow--dark-green"
      >
        <Button onClick={close} className="modal__close" variant="simple" color="black" size={24}>
          <HiX />
        </Button>
        {children}
      </Container>
    </Container>
  ) : null;

  return createPortal(renderModal, modalElement);
});

export default Modal;
