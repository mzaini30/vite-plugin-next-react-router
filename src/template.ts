export const generateRoutesCode = ({
  layoutImport,
  pageImports,
  layoutElement,
  routes,
  staticPageMetaImports,
  pages,
}: any) => `
import React from 'react';
import { Outlet } from 'react-router-dom';
${layoutImport}
${staticPageMetaImports}
${pageImports}

export const routes = [
  {
    path: '/',
    element: ${layoutElement},
    children: [
      ${routes}
    ]
  }
]

export const pages = [
  ${pages}
]
`;
