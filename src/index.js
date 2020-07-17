import React from 'react'

const addChildrens = (allChildrens, node, nodeChildren) => {
  // if the node have childrens, add them recursively
  if (nodeChildren) {
    allChildrens.push(...flattenChildren(nodeChildren))
  }

  // add the own node
  if (Array.isArray(node)) {
    return allChildrens.push(...node)
  } else {
    return allChildrens.push(node)
  }
}

const flattenChildren = children => {
  let allChildrens = []
  const isArray = children && Array.isArray(children)

  if (isArray) {
    children.map(node => {
      const { props: { children: nodeChildren } = {} } = node

      addChildrens(allChildrens, node, nodeChildren)
    })
  } else {
    const { props: { children: nodeChildren } = {} } = children

    addChildrens(allChildrens, children, nodeChildren)
  }

  return allChildrens
}

export default flattenChildren
