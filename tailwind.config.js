const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                peach: '#f7c59f',
                spaceCadet: '#2a324b',
                slateGray: '#767b91',
                frenchGray: '#c7ccdb',
                aliceBlue: '#e1e5ee',
            },
        },
    },
    plugins: [],
});
