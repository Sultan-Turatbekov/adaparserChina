import {faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export const contactLinks:contacts[] = [
    { to: 'https://wa.me/+79231023027', icon: faWhatsapp, text: 'WhatsApp' },
    { to: 'https://web.telegram.org/a/#6944523790', icon: faTelegram, text: 'Telegram' }
];

export const paymentMethods:payment[] = [
    { src: 'footer_images/mbank_ico.png', alt: 'mbank', rounded: '3px' },
    { src: 'footer_images/visa_ico.png', alt: 'visa', rounded: '3px' },
    { src: 'footer_images/mastercard_ico.jpg', alt: 'mastercard', rounded: '3px' },
    { src: 'footer_images/odengi_ico.png', alt: 'o_dengi', rounded: '3px' },
    { src: 'footer_images/sberbank_ico.png', alt: 'sberbank', rounded: '3px' },
    { src: 'footer_images/elkart_ico.png', alt: 'elcard', rounded: '5px' }
];
export const services:string[] = [
    'Парсинг инстаграм',
    'Парсинг Wildberries',
    'Парсинг онлайн магазинов'
]

export interface contacts {
    to: string,
    icon: IconDefinition,
    text: string
}

export interface payment {
    src: string,
    alt: string,
    rounded: string
}

