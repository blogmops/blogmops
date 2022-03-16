module.exports = () => ({
  plugins: ['stylelint-a11y'],
  content: ['./index.html', './src/**/.svelte'],
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-html/svelte'
  ],
  rules: {
    ignoreFiles: [
      '*.ts',
      '.git/**',
      '.github/**',
      '.vscode/**',
      'dist/**',
      'src/assets/**',
      'node_modules/**'
    ]
  }
});
