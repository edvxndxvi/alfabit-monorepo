import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    ${({ variant }) => 
        variant === "primary" &&
        css`
            background-color: #5033C3;
            color: white;
            border: none;

            &:hover {
                background-color: #3D1Eb3;
            }
                
            &:active {
                background-color: #2E0F9E;
            }

            &:disabled {
                background-color: #C3C3C3;
                cursor: not-allowed;
            }
        `
    }

    ${({ variant}) =>
        variant === "secondary" &&
        css`
            background-color: transparent;
            color: #5033C3;
            border: 2px solid #5033C3;

            &:hover {
                background-color: #EDE9FF;
            }   

            &:active {
                background-color: #D5CCFF;
            }

            &:disabled {
                background-color: #C3C3C3;
                border-color: #C3C3C3;
                cursor: not-allowed;
            }
        `
    }

    ${({ size }) =>
        size === "xs" &&
        css`
            padding: 4px 8px;        
            font-size: 12px;
            line-height: 16px;
        `
    }

    ${({ size }) =>
        size === "sm" &&
        css`
            padding: 8px 16px;        
            font-size: 14px;
            line-height: 20px;
        `
    }

    ${({ size }) =>
        size === "md" &&
        css`
            padding: 12px 24px;        
            font-size: 16px;
            line-height: 24px;
        `
    }

    ${({ size }) =>
        size === "lg" &&
        css`
            padding: 16px 32px;        
            font-size: 18px;
            line-height: 28px;
        `
    }
`