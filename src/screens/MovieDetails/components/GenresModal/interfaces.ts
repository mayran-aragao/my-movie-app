import { ModalBaseProps } from 'react-native';
import { IGenresProps } from '../../../Home/interfaces';

export interface IModalProps extends ModalBaseProps {
  genres: IGenresProps[];
  onClickOutside: Function;
  onSelect: Function;
  selectedId: number | null;
}
