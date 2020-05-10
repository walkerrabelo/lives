import React, { useRef } from 'react';

// import { Container } from './styles';

const ProductForm = ({
  addProduct
}) => {
  const id = useRef(null)
  const title = useRef(null)
  const submitProduct = () => addProduct({id: id.current.value, title: title.current.value})
  return (
    <>
      <form>
        <label>Id
          <input ref={id} type="text" name="id"/>
        </label>
        <label>Title
          <input ref={title} type="text" name="title"/>
        </label>
      </form>
      <button type="button" onClick={submitProduct}>Cadastrar</button>
    </>
  )
}

export default ProductForm;