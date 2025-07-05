export interface BaseModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  className?: string;
  children?: React.ReactNode;
}
