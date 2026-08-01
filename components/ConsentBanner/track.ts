export function trackEvent(name: string, params?: Record<string, string>) {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", name, params);
}