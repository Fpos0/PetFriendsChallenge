/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { convertValueToString } from '../utils/convertValueToString';
import styles from './styles.module.scss';
import { ProductsContext } from '../../context/ProductsContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '720px',
    overflow: 'visibile',
  },
};
interface ProductData {
  // id: string;
  title: string;
  subtitle: string;
  about: string;
  imgURL: string;
  price: number;
  // category: string[];
}
// Sera preciso formatar o preço
// Modal.setAppElement('ProductCard');

export function ProductCard({
  title,
  subtitle,
  imgURL,
  price,
  about,
}: ProductData) {
  const { updateCart } = useContext(ProductsContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [qntityToAdd, setQntityToAdd] = useState(1);
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handlePlusModalButton() {
    setQntityToAdd(qntityToAdd + 1);
  }

  function handleMinusModalButton() {
    const prev = qntityToAdd;
    if (prev - 1 === 0) {
      setQntityToAdd(1);
      return;
    }
    setQntityToAdd(qntityToAdd - 1);
  }

  function handleConfirmAddBtn() {
    const newCartData = {
      totalValue: qntityToAdd * price,
      totalProducts: qntityToAdd,
    };
    updateCart(newCartData);
    closeModal();
  }
  return (
    <>
      <div className={styles.container} onClick={openModal}>
        <div className={styles.image}>
          <img src={imgURL} alt="Imagem Produto" />
        </div>

        <div className={styles.title}>
          <p>
            {title} <br /> {subtitle}
          </p>
        </div>

        <div className={styles.cardFooter}>
          <p>R$ {price}</p>
          <div>
            <FaCartPlus size={20} className={styles.cartSimbol} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClkose={closeModal}
        style={customStyles}
        contentLabel="Product Content"
      >
        <button
          type="button"
          onClick={closeModal}
          className={styles.modalCloseBtn}
        >
          <GrClose size={30} />
        </button>
        <div className={styles.modalContainer}>
          <div className={styles.LeftSideModal}>
            <img src={imgURL} alt="Imagem Produto" />
          </div>
          <div className={styles.RightSideModal}>
            <h2 className={styles.titleModal}>{title}</h2>
            <div className={styles.aboutModal}>{about}</div>
            <div className={styles.observacoesModal}>
              <span>Observações</span> <textarea id="obs" rows={5} cols={33} />
            </div>
            <div className={styles.bottomRightModal}>
              <div className={styles.btnsAddSub}>
                <button type="button" onClick={handleMinusModalButton}>
                  <FaMinus size={15} />
                </button>
                <span>{qntityToAdd}</span>
                <button type="button" onClick={handlePlusModalButton}>
                  <FaPlus size={15} />
                </button>
              </div>
              <div className={styles.confirmButton}>
                <button type="button" onClick={handleConfirmAddBtn}>
                  Adicionar{' '}
                  <span>{convertValueToString(qntityToAdd * price)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
