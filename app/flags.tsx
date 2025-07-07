import { flag } from 'flags/next';

export const freeShippingFlag = flag<boolean>({
    key: 'free-shipping-flag',
    decide() {
        return true;
    },
});