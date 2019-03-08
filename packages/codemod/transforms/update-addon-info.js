/**
 * Takes the deprecated addon-info API, addWithInfo, and
 * converts to the new API.
 *
 * Example of deprecated addWithInfo API:
 *
 * storiesOf('Button')
 *   .addWithInfo(
 *     'story name',
 *     'Story description.',
 *     () => (
 *       <Button label="The Button" />
 *     )
 *   )
 *
 * Converts to the new API:
 *
 * storiesOf('Button')
 *   .add(
 *     'story name',
 *     () => (
 *       <Button label="The Button" />
 *     ),
 *     { info: 'Story description.' }
 *   )
 */
const transformer = (file, api) => {
  const j = api.jscodeshift
  const root = j(file.source)

  const info = addWithInfoExpression => {
    const { node } = addWithInfoExpression
    const args = node.arguments
    node.callee.property.name = 'add'

    if (args[3] === undefined && args[2] === undefined) {
      // No description or options provided. Return as is.
      return node
    } else if (args[3] === undefined) {
      // No info options. Return info as raw text.
      node.arguments = [
        args[0],
        args[2],
        j.objectExpression([j.property('init', j.identifier('info'), args[1])]),
      ]
    } else {
      // Info options provided. Construct full info object.
      node.arguments = [
        args[0],
        args[2],
        j.objectExpression([
          j.property(
            'init',
            j.identifier('info'),
            j.objectExpression([
              j.property('init', j.identifier('text'), args[1]),
              ...args[3].properties,
            ])
          ),
        ]),
      ]
    }

    return node
  }

  const addWithInfoExpressions = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'addWithInfo',
      },
    },
  })

  if (addWithInfoExpressions.size()) {
    addWithInfoExpressions.replaceWith(info)
  }

  return root.toSource({
    lineTerminator: '\n',
  })
}

module.exports = transformer
