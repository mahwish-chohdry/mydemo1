export interface StatusDTO {
    title: string;
    details: string;
    stepSuccessful: boolean;
}

export interface CancelDTO {
    title: string;
    details: string;
    reasons: string[];
}

export interface packageCardDetails {
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageDetails: string[];
}

export interface accordionPanelData {
    faq: string;
    answer: string;
}

export interface Promo {
    name: string;
    info: string;
    discount: number;
    selected: boolean;
}