export type Testimonial = {
    quote: string;
    author: string;
    role: string;
}

export type SolutionItem = {
    name: string;
    description: string;
    inclus: string[];
    price: string;
    ctaLabel: string;
};

export type SiteContent = {
    name: string;
    url: string;
    logo?: string;
    logoDark?: string;
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
        ctaLabel2: string;
    };
    caroussel: {
        title: string;
        subtitle: string;
        introduction: string;
        items: { image: string }[];

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
        image: string;
        imageMobile: string;
    };
    analytics: {
        gaId: string;
    };
    faq: {
        title: string;
        subtitle: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    footer: {
        companyName: string;
        email: string;
        phone: string;
        logo: string;
        brandName: string;
        address: string;
        navLinks: { label: string; href: string }[];
        navTitle: string;
        legalLinks: { label: string; href: string }[];
        legalTitle: string;
        newsletterTitle: string;
        newsletterPlaceholder: string;
        newsletterSubmit: string;
        bigTitle: string;
        socialText: string;
        social: { label: string; href: string }[];
    };
};