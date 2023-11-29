

export interface Sessionn {
    expires: string;
    user: {
        email: string;
        image: string;
        name: string;
    }
}

export interface MenuProps {
    icon: any;
    content: React.ReactNode;
}

export interface ItemContentProps {
    typeOfItem: string;
    session?: any 
}

export interface SignInButtonProps {
    providerId: string
}