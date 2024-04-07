import type { CartResponse } from '@api';

export default interface Cart extends CartResponse {
  selected: boolean;
}
