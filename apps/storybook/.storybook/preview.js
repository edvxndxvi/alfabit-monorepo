/** @type { import('@storybook/react-vite').Preview } */
var preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};
export default preview;
