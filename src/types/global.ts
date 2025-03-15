type Links = {
    github?: string;
    live?: string;
};

export type Project = {
    name: string;
    image: string;
    about: string;
    tech: string[];
    date: string;
    new?: boolean;
    dev?: boolean;
    links: Links;
};
