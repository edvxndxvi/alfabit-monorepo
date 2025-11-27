export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'xs' | 'sm' | 'md' | 'lg';  
    label: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    onClick?: () => void;
}