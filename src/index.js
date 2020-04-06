import React from 'react'

const flattenChildren = (children) => {
  let flattedChildren = [];

  children.map(node => {
    if(node.props.children){
      flattedChildren.push(...flattenChildren(node.props.children));
    } else {
      flattedChildren.push(node);
    }
  })
  
  return flattedChildren;
}

export default flattenChildren