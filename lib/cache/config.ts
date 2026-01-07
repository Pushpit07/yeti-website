export const CACHE_TTL = {
    events: 30 * 60 * 1000, // 30 minutes
    application: 10 * 60 * 1000, // 10 minutes
    projects: 60 * 60 * 1000, // 60 minutes
    makerspace: 60 * 60 * 1000, // 60 minutes
    contributors: 60 * 60 * 1000, // 60 minutes
    // Default fallback for others
    default: 60 * 60 * 1000, // 60 minutes
} as const;

export type CacheKey = keyof typeof CACHE_TTL | string;
