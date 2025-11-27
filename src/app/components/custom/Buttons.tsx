import React, {useState, useContext, useCallback} from 'react';
import { LinksProps } from 'react-router-dom';
import ButtonProps, {LinkButtonProps} from '../../models/button.props';

export default function LinkButton(props: LinkButtonProps) {
    return (
        <a
            href = {props.href}
            id = {props.id}
            className={props.className}
        >
            {props.innerContent}
        </a>
    )
}