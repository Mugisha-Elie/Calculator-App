export interface ButtonProps{
    label: string;
    color?: "gray" | "orange";
    span?: 1 | 2;
    onClick: (val: string) => void
}