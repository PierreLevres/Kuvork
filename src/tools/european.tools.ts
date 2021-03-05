import kiastamps from './european.kia.token.collection';
import hyundaistamps from './european.hyundai.token.collection';
import logger from '../logger';

export const getStamp = (brand: string): string => {
const stamp = (brand == 'H') ? (hyundaistamps[Math.floor(Math.random() * hyundaistamps.length)]) : (kiastamps[Math.floor(Math.random() * kiastamps.length)]);
return stamp
}
