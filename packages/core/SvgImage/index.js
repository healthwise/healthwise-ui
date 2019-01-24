/* global fetch, DOMParser, document */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CssParser from '../CssParser'
import styles from './SvgImage.css'
import { getKey } from '../KeyGen'

class SvgImage extends Component {
  componentDidMount() {
    if (new RegExp('^https?://.*\\.svg$').test(this.props.src)) {
      const alt = this.props.alt
      const wrapper = this.imageWrapper
      const recolor = this.props.recolor

      if (wrapper) {
        fetch(this.props.src, {
          method: 'get',
          mode: 'cors',
          cache: 'no-store',
        })
          .then(function(response) {
            return response.text()
          })
          .then(function(text) {
            const Parser = new DOMParser()
            const doc = Parser.parseFromString(text, 'text/xml')
            const svg = doc.querySelector('svg')
            const img = wrapper.querySelector('img')
            const styleMap = {}
            if (svg && img) {
              svg.setAttribute('class', styles.svg)
              if (alt) {
                svg.setAttribute('role', 'img')
                svg.setAttribute('aria-label', alt)
              } else {
                svg.setAttribute('role', 'presentation')
                svg.setAttribute('focusable', 'false')
              }

              // Remove all non-none color from svg to make it easier to overwrite color without losing any other style data
              const styleNode = svg.querySelector('style')
              if (styleNode) styleNode.setAttribute('aria-hidden', true)
              if (recolor && styleNode) {
                const styleParser = new CssParser()
                const textSelector = styleNode.innerHTML ? 'innerHTML' : 'textContent'
                let styleHtml = styleNode[textSelector] || ''
                let styleJson = styleParser.parse(styleHtml) || []
                let workingJson = styleJson.slice(0)
                for (let index = 0; index < workingJson.length; index++) {
                  // Renaming svg class names to avoid name collisions across multiple svg elements
                  let declaration = workingJson[index]
                  if (declaration.selector.indexOf('.') === 0) {
                    const newSelector = declaration.selector + '_' + getKey()
                    styleMap[declaration.selector] = newSelector
                    styleJson[index].selector = newSelector
                  }

                  // Apply new rules for fill and stroke so these properties can be overwritten
                  let hasStroke = false
                  for (let ri = 0; ri < declaration.rules.length; ri++) {
                    const rule = declaration.rules[ri]
                    if (rule.directive === 'stroke') {
                      hasStroke = true
                    }
                    if (rule.directive === 'fill' || rule.directive === 'stroke') {
                      if (rule.value === 'none') {
                        styleJson[index].rules[ri].value = 'none !important'
                      } else {
                        styleJson[index].rules[ri].value = 'inherit'
                      }
                    }
                  }
                  if (!hasStroke) {
                    styleJson[index].rules[declaration.rules.length] = {
                      directive: 'stroke-width',
                      value: '0',
                    }
                  }
                }
                styleNode[textSelector] = styleParser.compose(styleJson)
              }
              for (var classElement of svg.querySelectorAll('[class]')) {
                let className = classElement.getAttribute('class')

                // Use new class name if one exists
                if (styleMap[`.${className}`]) {
                  className = styleMap[`.${className}`].substr(1)
                }
                classElement.setAttribute(
                  'class',
                  `${className} hw-svg-built ${recolor ? styles.hw_svg_built : ''}`
                )
              }
              wrapper.replaceChild(svg, img)
            }
          })
          .catch(function(err) {
            console.error(err)
          })
      }
    }
  }

  render() {
    const { src, alt, additionalClassName, children, recolor, ...otherAttributes } = this.props
    if (children || recolor) {
      // Peeled off invalid image attributes
    }

    return (
      <span
        className={`hw-structured-image-wrapper${
          additionalClassName ? ' ' + additionalClassName : ''
        }`}
        ref={wrapper => {
          this.imageWrapper = wrapper
        }}
      >
        <img className={`hw-image ${styles.image}`} src={src} alt={alt} {...otherAttributes} />
      </span>
    )
  }
}

SvgImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  additionalClassName: PropTypes.string,
  recolor: PropTypes.bool,
  children: PropTypes.node,
}

SvgImage.defaultProps = {
  alt: '',
  recolor: true,
  additionalClassName: null,
  children: null,
}

export default SvgImage
