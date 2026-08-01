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
    problem: {
        title: string;
        items: string[];
    };
    solution: {
        title: string;
        benefits: string[];
    }
};