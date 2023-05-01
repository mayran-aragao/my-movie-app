import { ModalBaseProps } from 'react-native';

export interface ModalProps extends ModalBaseProps {
  onClickOutside: Function;
  onSelectLanguage: Function;
}
