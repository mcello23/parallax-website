import React from 'react';
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
  if (!isOpen) return null;

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <img src={cert.imageURL} alt={cert.title} />
              <div dangerouslySetInnerHTML={{ __html: cert.caption }} />
            </div>
          ))}
        </div>
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
