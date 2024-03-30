import { CartModel } from '@api';

export default interface Cart extends CartModel {
	selected: boolean;
}
