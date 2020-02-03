import React from 'react';

const Modal = ({hideModal, number, remove}) => {
    const removeTask = id => {
        remove(id);
        hideModal();
    };
    return (
        <div className="modal-container" onClick={hideModal}>
            <div className="modal-remove" onClick={e => e.stopPropagation()}>
                <p>Czy na pewno usunąć to zadanie?</p>
                <button className="btn_cancel" onClick={hideModal}>Anuluj</button>
                <button className="btn_remove" onClick={() => removeTask(number)}>Usuń</button>
            </div>
        </div>
    )
};

export default Modal;