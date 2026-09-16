export type Testimonial = {
    quote: string;
    author: string;
    role: string;
}

export type SiteContent = {
    name: string;
    url: string;
    logo?: string;
    seo: {
        title: string;
        description: string;
    };
    theme: {
        primary: string;
        primaryHover: string;
        text: string;
        textMuted: string;
        background: string;
        surface: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaLabel: string;
    };
    problem: {
        title: string;
        subtitle: string;
        introduction: string;
        image: string;
        items: string[];
    };
    solution: {
        title: string;
        subtitle: string;
        introduction: string;
        categories: string[];
    };
    socialProof: {
        title: string;
        testimonials: Testimonial[];
    };
    cta: {
        title: string;
        intro: string;
        formEndpoint: string;
    };
    analytics: {
        gaId: string;
    };
    footer: {
        companyName: string;
        email: string;
        phone: string;
    };
};