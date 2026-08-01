export type SiteContent = {
    name: string;
    url: string;
    seo: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaLabel: string;
    };
};