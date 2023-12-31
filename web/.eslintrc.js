/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['simple-import-sort'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/', '^@@/'] }],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-underscore-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'import/order': ['error', { 'newlines-between': 'always' }],
      },
    },
  ],
};
