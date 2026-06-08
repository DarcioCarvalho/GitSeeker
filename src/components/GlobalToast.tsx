import { useEffect, useRef } from "react";
import { Toast } from 'bootstrap';

type ToastType = 'success' | 'danger';

interface GlobalToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export default function GlobalToast({ message, type, onClose }: GlobalToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  const title: Record<ToastType, string> = {
    success: "Concluído",
    danger: "Erro"
  }

  useEffect(() => {
    if (!toastRef.current) return;

    const element = toastRef.current;

    const toast = Toast.getOrCreateInstance(element, {
      autohide: true,
      delay: 3000
    });

    toast.show();

    const handleHidden = () => {
      onClose();
    }

    element.addEventListener('hidden.bs.toast', handleHidden);

    return () => {
      element.removeEventListener('hidden.bs.toast', handleHidden);
    }


  }, [message, onClose]);


  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div ref={toastRef} className={`toast text-bg-${type}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <div className={`rounded me-2 bg-${type}`} style={{ height: '20px', width: '20px' }} /> */}
          <div className={`rounded me-2 w-20px h-20px bg-${type}`} />
          <strong className={`me-auto text-${type}`}>{title[type]}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
}