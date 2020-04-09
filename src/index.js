import React from 'react';

const flattenChildren = children => {
  let flattedChildren = [];
  const isArray = children && Array.isArray(children);

  isArray &&
    children.map(node => {
      const { props: { children: nodeChildren } = {} } = node;
      if (nodeChildren) {
        flattedChildren.push(...flattenChildren(nodeChildren));
      } else {
        flattedChildren.push(node);
      }
    });

  return flattedChildren;
};

export default flattenChildren;
