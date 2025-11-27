import React from 'react';

export default interface ButtonProps {
    id: string;
    className: string;
    innerContent: string | React.ReactNode | undefined;
}

export interface LinkButtonProps extends ButtonProps {
    href: string;
}