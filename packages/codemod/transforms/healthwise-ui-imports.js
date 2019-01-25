// Updates import statements from old, internal registry packages
// to public npm registry and new package naming convention.
//
// Example
//
// import Button from '@healthwise/button'
//
// -->
//
// import Button from '@healthwise-ui/core/Button'
const packageMap = {
  '@healthwise/accordion-group': '@healthwise-ui/core/AccordionGroup',
  '@healthwise/accordion': '@healthwise-ui/core/Accordion',
  '@healthwise/app-bar': '@healthwise-ui/core/AppBar',
  '@healthwise/block-heading': '@healthwise-ui/core/BlockHeading',
  '@healthwise/button-group': '@healthwise-ui/core/ButtonGroup',
  '@healthwise/button': '@healthwise-ui/core/Button',
  '@healthwise/card': '@healthwise-ui/core/Card',
  '@healthwise/checkbox': '@healthwise-ui/core/Checkbox',
  '@healthwise/content-action': '@healthwise-ui/content/Action',
  '@healthwise/content-article': '@healthwise-ui/content/Article',
  '@healthwise/content-call-to-action': '@healthwise-ui/content/CallToAction',
  '@healthwise/content-credits-and-references': '@healthwise-ui/content/CreditsAndReferences',
  '@healthwise/content-credits': '@healthwise-ui/content/Credits',
  '@healthwise/content-media-gallery': '@healthwise-ui/content/MediaGallery',
  '@healthwise/content-slideshow': '@healthwise-ui/content/Slideshow',
  '@healthwise/content-story': '@healthwise-ui/content/Story',
  '@healthwise/content-video': '@healthwise-ui/content/Video',
  '@healthwise/css-baseline': '@healthwise-ui/core/CssBaseline',
  '@healthwise/css-parser': '@healthwise-ui/core/CssParser',
  '@healthwise/drop-down': '@healthwise-ui/core/DropDown',
  '@healthwise/feature-flipper': '@healthwise-ui/core/FeatureFlipper',
  '@healthwise/footer': '@healthwise-ui/core/Footer',
  '@healthwise/healthwise-logo': '@healthwise-ui/core/HealthwiseLogo',
  '@healthwise/icon-array': '@healthwise-ui/core/IconArray',
  '@healthwise/icon': '@healthwise-ui/core/Icon',
  '@healthwise/image': '@healthwise-ui/core/Image',
  '@healthwise/input-text': '@healthwise-ui/core/InputText',
  '@healthwise/insights': '@healthwise-ui/content/Insights',
  '@healthwise/key-gen': '@healthwise-ui/core/KeyGen',
  '@healthwise/likert-scale': '@healthwise-ui/core/LikertScale',
  '@healthwise/loading-indicator': '@healthwise-ui/core/LoadingIndicator',
  '@healthwise/media-credits': '@healthwise-ui/content/MediaCredits',
  '@healthwise/media-service-video': '@healthwise-ui/content/MediaServiceVideo',
  '@healthwise/message': '@healthwise-ui/core/Message',
  '@healthwise/modal': '@healthwise-ui/core/Modal',
  '@healthwise/print-only': '@healthwise-ui/core/PrintOnly',
  '@healthwise/progress-bar': '@healthwise-ui/core/ProgressBar',
  '@healthwise/radio': '@healthwise-ui/core/Radio',
  '@healthwise/redux-util': '@healthwise-ui/core/ReduxUtil',
  '@healthwise/references': '@healthwise-ui/core/References',
  '@healthwise/screen-reader-only': '@healthwise-ui/core/ScreenReaderOnly',
  '@healthwise/svg-image': '@healthwise-ui/core/SvgImage',
  '@healthwise/tab-group': '@healthwise-ui/core/TabGroup',
  '@healthwise/tab': '@healthwise-ui/core/Tab',
  '@healthwise/table': '@healthwise-ui/core/Table',
  '@healthwise/text-area': '@healthwise-ui/core/TextArea',
  '@healthwise/theme': '@healthwise-ui/core/Theme',
  '@healthwise/translation': '@healthwise-ui/core/Translation',
  '@healthwise/validation-error': '@healthwise-ui/core/ValidationError',
  '@healthwise/video-thumbnail': '@healthwise-ui/core/VideoThumbnail'
}

const updateImports = declaration => {
  const importName = declaration.node.source.value
  declaration.node.source.value = (packageMap[importName] || importName)
  return declaration.node
}

const transformer = (file, api) => {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.ImportDeclaration)
    .replaceWith(updateImports)
    .toSource({
      quote: 'single',
      lineTerminator: '\n'
    })
}

module.exports = transformer
