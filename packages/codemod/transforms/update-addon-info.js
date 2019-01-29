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
  const j = api.jscodeshift;
  const root = j(file.source);

  /**
   * Returns a list of parameters for the withInfo function. The contents
   * of this list is either the second argument from the original
   * addWithInfo function, if no additional options were used, or a
   * combined object of all the options from the original function.
   * @param {list} args - original addWithInfo function parameters
   * @return {list} the modified list of parameters for the new function
   */
  const getOptions = args => {
    if (args[3] === undefined) {
      if (args[2] === undefined) {
        // when the optional description string is not supplied for addWithInfo, just use story name
        return [args[0]];
      }
      return [args[1]];
    }
    return [
      j.objectExpression([
        j.property('init', j.identifier('text'), args[1]),
        ...args[3].properties,
      ]),
    ];
  };

  /**
   * Constructs the new withInfo function from the parameters of the
   * original addWithInfo function.
   * @param {CallExpression} addWithInfoExpression - original function
   * @returns {CallExpression} the new withInfo function
   */
  const withInfo = addWithInfoExpression => {
    const { node } = addWithInfoExpression;
    const args = node.arguments;

    // if optional description string is not supplied, the story component becomes second arg
    const storyComponent = args[2] ? args[2] : args[1];

    node.callee.property.name = 'add';
    node.arguments = [
      args[0],
      j.callExpression(j.callExpression(j.identifier('withInfo'), getOptions(args)), [
        storyComponent,
      ]),
    ];

    return node;
  };

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
        j.objectExpression([
          j.property('init', j.identifier('info'), args[1])
        ])
      ]
    } else {
      // Info options provided. Construct full info object.
      node.arguments = [
        args[0],
        args[2],
        j.objectExpression([
          j.property('init', j.identifier('info'), j.objectExpression([
            j.property('init', j.identifier('text'), args[1]),
            ...args[3].properties
          ]))
        ])
      ]
    }

    return node
  }

  /**
   * Checks for - import { withInfo } from "@storybook/addon-info";
   * Adds the import if necessary.
   */
  const checkWithInfoImport = () => {
    const importExists = root
      .find(j.ImportDeclaration)
      .filter(imp => imp.node.source.value === '@storybook/addon-info')
      .size();

    if (importExists) return;

    root
      .find(j.ImportDeclaration)
      .at(-1)
      .insertAfter(
        j.importDeclaration(
          [j.importSpecifier(j.identifier('withInfo'))],
          j.literal('@storybook/addon-info')
        )
      );
  };

  const addWithInfoExpressions = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'addWithInfo',
      },
    },
  });

  if (addWithInfoExpressions.size()) {
    addWithInfoExpressions.replaceWith(info);
  }

  return root.toSource({
    lineTerminator: '\n'
  });
}

module.exports = transformer
