import React from 'react';

const flattenChildren = children => {
  let flattedChildren = [];
  const isArray = children && Array.isArray(children);

  if (isArray) {
    children.map(node => {
      const { props: { children: nodeChildren } = {} } = node;

      if (nodeChildren) {
        return flattedChildren.push(...flattenChildren(nodeChildren));
      } else {
        return flattedChildren.push(node);
      }
    });
  } else {
    const { props: { children: nodeChildren } = {} } = children;

    if (nodeChildren) {
      return flattedChildren.push(...flattenChildren(nodeChildren));
    } else {
      return flattedChildren.push(node);
    }
  }

  return flattedChildren;
};

export default flattenChildren;
