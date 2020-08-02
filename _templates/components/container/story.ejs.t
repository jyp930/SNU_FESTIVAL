---
to: src/containers/<%= h.changeCase.pascalCase(name) %>/index.stories.js
---
import React from 'react';
import <%= h.changeCase.pascalCase(name) %> from './index';

export default {
  title: 'containers/<%= h.changeCase.pascalCase(name) %>',
};

export const Default = () => <<%= h.changeCase.pascalCase(name) %> />;
