import { fn } from 'storybook/test';
import { Button } from "@edvxndxvi/alfabit-button";

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Button',
  },
};

export const Large = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
};
