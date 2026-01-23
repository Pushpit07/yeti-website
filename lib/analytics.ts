// Google Analytics 4 utility functions

export const GA_MEASUREMENT_ID = 'G-7ZZ9BJPPXS';
export const GOOGLE_ADS_ID = 'AW-17100411946';

/**
 * Check if we're in production environment
 */
export const isProduction = (): boolean => {
    return process.env.NODE_ENV === 'production';
};

/**
 * Initialize Google Analytics
 * This is called when the gtag script loads
 */
export const initGA = (): void => {
    if (!isProduction()) {
        console.log('[Analytics] Skipping GA initialization in development');
        return;
    }

    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        console.log('[Analytics] GA4 initialized with ID:', GA_MEASUREMENT_ID);
    }
};

/**
 * Track a page view in Google Analytics
 * @param path - The page path to track (e.g., '/projects')
 */
export const trackPageView = (path: string): void => {
    // Skip tracking in non-production environments
    if (!isProduction()) {
        console.log('[Analytics] Skipping page view in development:', path);
        return;
    }

    // Guard against gtag not being available
    if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
        console.warn('[Analytics] gtag not available for tracking:', path);
        return;
    }

    // Track the page view with GA4
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
    });

    console.log('[Analytics] Page view tracked:', path);
};

/**
 * Track a custom event in Google Analytics
 * @param action - The event action (e.g., 'click', 'submit')
 * @param category - The event category (e.g., 'button', 'form')
 * @param label - The event label (optional)
 * @param value - The event value (optional)
 */
export const trackEvent = (
    action: string,
    category?: string,
    label?: string,
    value?: number
): void => {
    if (!isProduction() || typeof window === 'undefined' || typeof window.gtag === 'undefined') {
        return;
    }

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
