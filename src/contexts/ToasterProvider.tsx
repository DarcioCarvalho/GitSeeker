import { createContext, useContext, useState, type ReactNode } from "react";
import GlobalToast from "../components/GlobalToast";

type ToastType = 'success' | 'danger';

interface ToastData {
  message: string;
  type: ToastType;
}

interface ToastContextData {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}
interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext({} as ToastContextData);


export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showSuccess = (message: string) => {
    setToast({ message, type: 'success' });
  }

  const showError = (message: string) => {
    setToast({ message, type: 'danger' });
  }

  return (
    <ToastContext.Provider value={{ showSuccess, showError }}>
      {children}

      {toast && (
        <GlobalToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);