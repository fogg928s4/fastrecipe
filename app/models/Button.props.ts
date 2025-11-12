import React from 'react';

export default interface ButtonProps {
    id: string;
    className: string;
    innerContent: string | React.ReactNode;
}

export interface LinkButtonProps extends ButtonProps {
    href: string;
}