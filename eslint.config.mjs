import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  // `design/` holds the standalone HTML design references (mockup + its
  // browser runtime `support.js`). They are not production source and must
  // not be linted as Next code.
  globalIgnores(['.next/**', 'node_modules/**', 'coverage/**', 'design/**']),
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]);
