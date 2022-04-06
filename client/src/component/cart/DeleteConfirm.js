import React from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

function Delete({ id, deleteProduct, show,hide }) {
  console.log(id, 'id');
  return (
    <>
      <SweetAlert
        show={show}
        confirmBtnText='Yes'
        title='Are you sure?'
        showCancelButton 
        cancelButtonText='No'
        closeModal={true}
        closeOnClickOutside
        imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhbkbAaut1zal_92hOuwbfVT6tNh5n60Vhw&usqp=CAU'}
        onConfirm={() => deleteProduct(id)}
        onCancel={hide}
      />
    </>
  );
}

export default Delete;
