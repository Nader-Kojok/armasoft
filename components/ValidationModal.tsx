import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmarkCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'success' | 'error';
  message: string;
}

const ValidationModal: React.FC<ValidationModalProps> = ({ isOpen, onClose, status, message }) => {
  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1A1A1A] rounded-xl p-6 max-w-md w-full shadow-xl border border-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  status === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
                }`}
              >
                <FontAwesomeIcon
                  icon={status === 'success' ? faCheckCircle : faXmarkCircle}
                  className={`text-2xl ${
                    status === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                />
              </div>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </button>
            </div>
            
            <h2
              id="modal-title"
              className={`text-xl font-bold mb-2 ${
                status === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status === 'success' ? 'Succès!' : 'Erreur'}
            </h2>
            
            <p className="text-white/90 mb-6">{message}</p>
            
            <button
              onClick={onClose}
              className="w-full bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              autoFocus
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ValidationModal; 