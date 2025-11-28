/** @type { import('@storybook/react-vite').Preview } */
declare const preview: {
    parameters: {
        controls: {
            matchers: {
                color: RegExp;
                date: RegExp;
            };
        };
    };
};
export default preview;
