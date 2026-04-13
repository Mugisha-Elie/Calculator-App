export interface BtnProps{
    label: string;
    color?: 'light-gray' | 'orange';
    span?: 1 | 2;
    onClick: (label: string) => void;
}