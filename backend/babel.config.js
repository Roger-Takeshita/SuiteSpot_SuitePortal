module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [['module-resolver']],
    ignore: ['**/*.test.ts', '**/*.spec.ts'],
};
