export type Testimonial = {
    quote: string;
    author: string;
    role: string;
}

export type SolutionItem = {
    name: string;
    description: string;
    price: string;
    ctaLabel: string;
};

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
        surface2: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaLabel: string;
    };

    presentation: {
        title: string;
        subtitle: string;
        subtitle2: string;
        image: string;
    };

    portfolio: {
        title: string;
        subtitle: string;
        introduction: string;
        introduction2: string;
        image: string;
        items: string[];
    };

    
   solution: {
        title: string;
        subtitle: string;
        introduction: string;
        categories: SolutionItem[];
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