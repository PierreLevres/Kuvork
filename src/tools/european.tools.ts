import kiastamps from './kia.european.token.collection';
import hyundaistamps from './hyundai.european.token.collection';
import logger from '../logger';

export const getStamp = (brand: string): string => {
const stamp = (brand == 'H') ? (hyundaistamps[Math.floor(Math.random() * hyundaistamps.length)]) : (kiastamps[Math.floor(Math.random() * kiastamps.length)]);
logger.debug(brand+  ' was brand, stamp is ' + stamp);
return stamp
}
