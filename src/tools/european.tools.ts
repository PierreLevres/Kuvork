import kiastamps from './kia.european.token.collection';
import hyundaistamps from './hyundai.european.token.collection';


export const getStamp = (brand: string): string => {

return (brand == 'H') ? (hyundaistamps[Math.floor(Math.random() * hyundaistamps.length)]) : (kiastamps[Math.floor(Math.random() * kiastamps.length)]);

}
