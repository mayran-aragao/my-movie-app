import { ModalBaseProps } from 'react-native';
import { IGenresProps } from '../../interfaces';

export interface IModalProps extends ModalBaseProps {
  genres: IGenresProps[];
  onClickOutside: Function;
  onSelect: Function;
  selectedId: number | null;
}
