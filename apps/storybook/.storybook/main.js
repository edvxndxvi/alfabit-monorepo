import { dirname } from 'path';
import { fileURLToPath } from 'url';
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return dirname(fileURLToPath(import.meta.resolve("".concat(value, "/package.json"))));
}
var config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [getAbsolutePath("@storybook/addon-themes")],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
};
export default config;
