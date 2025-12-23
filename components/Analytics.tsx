'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

/**
 * Internal analytics tracker component
 */
function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Construct the full path including search params
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

        // Track the page view
        trackPageView(url);
    }, [pathname, searchParams]);

    return null;
}

/**
 * Analytics component that tracks page views on route changes
 * This component should be included once in the root layout
 */
export default function Analytics() {
    return (
        <Suspense fallback={null}>
            <AnalyticsTracker />
        </Suspense>
    );
}
