import React from 'react';

const addChildrens = (flattedChildren, node, nodeChildren) => {
  if (nodeChildren) {
    return flattedChildren.push(...flattenChildren(nodeChildren));
  } else {
    return flattedChildren.push(node);
  }
};

const flattenChildren = children => {
  let flattedChildren = [];
  const isArray = children && Array.isArray(children);

  if (isArray) {
    children.map(node => {
      const { props: { children: nodeChildren } = {} } = node;

      addChildrens(flattedChildren, node, nodeChildren);
    });
  } else {
    const { props: { children: nodeChildren } = {} } = children;

    addChildrens(flattedChildren, children, nodeChildren);
  }

  return flattedChildren;
};

export default flattenChildren;
