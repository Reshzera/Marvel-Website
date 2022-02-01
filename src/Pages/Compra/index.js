import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import { DescriptionTemplate } from '../../MarvelApi';
import { addCart } from '../../Store/Action';
import { CompraContainer, DetalhesComic, HQthumbContainer, HQTextContainer, AddCart, ModalButton, ModalContainer, ModalImg } from './styles';
import './ModalTransition.css'

function Compra() {
  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      alignItems: 'center'
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false)

  const ComicInfo = useSelector(state => state.currentProduct)
  console.log(ComicInfo)
  const dispatch = useDispatch();


  if (ComicInfo.noProduct === true) {
    return (<Redirect to="/" />)
  }
  return (

    <>
      <CompraContainer>
        <DetalhesComic>
          <HQthumbContainer raro={ComicInfo.raro}>
            <img src={`${ComicInfo.thumbnail.path}/portrait_incredible.${ComicInfo.thumbnail.extension}`} />
            {ComicInfo.raro ? <div><h1>HQ rara</h1></div> : null}
          </HQthumbContainer>
          <HQTextContainer>
            <h2>{ComicInfo.title}</h2>
            <section>
              <h1 style={{ color: 'black', fontWeight: 'bold' }}>HQ description:</h1><span>{DescriptionTemplate}</span>
            </section>
            <div>
              <h1>Preço: ${ComicInfo.prices[0].price}</h1>
              <AddCart onClick={() => {setIsOpen(true)}}>Adicionar Ao Carrinho</AddCart>
            </div>
          </HQTextContainer>
        </DetalhesComic>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      > 
        <ModalImg>
          <h2 style={{textAlign: 'center'}}>O produto foi adicionado no seu Carrinho</h2>
          <img src={`${ComicInfo.thumbnail.path}/portrait_incredible.${ComicInfo.thumbnail.extension}`} />
        </ModalImg>
        <ModalContainer> 
          <ModalButton to='/' colorb='red' onClick={() => {dispatch(addCart(ComicInfo))}}>Voltar para a loja</ModalButton>
          <ModalButton to='/carrinho' onClick={() => {dispatch(addCart(ComicInfo))}}>Ir pra o Carrinho</ModalButton>
        </ModalContainer>
      </Modal>
      </CompraContainer>
    </>
  )

}

export default Compra;
