// TypeScript type definitions for Google Analytics gtag.js

export interface GtagEvent {
    action: string;
    category?: string;
    label?: string;
    value?: number;
}

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js' | 'set',
            targetId: string | Date,
            config?: {
                page_path?: string;
                page_title?: string;
                page_location?: string;
                [key: string]: any;
            }
        ) => void;
        dataLayer: any[];
    }
}

export { };
