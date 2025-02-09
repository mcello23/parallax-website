import M from 'materialize-css';
import React, { useEffect } from 'react';
import { Certificate } from '../../types/types';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
}

const CertificatesModal: React.FC<CertificatesModalProps> = ({
  isOpen,
  onClose,
  certificates
}) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }, []);

  if (!isOpen) return null;

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <div id="juicebox-container" className="juicebox-container" />
      </div>
      <div className="modal-footer">
        <button onClick={onClose} className="modal-close waves-effect waves-green btn-flat">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CertificatesModal;
