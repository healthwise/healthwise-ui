import SvgImage from './index'

export default {
  title: 'Dev Utilities/Svg Image',
  component: SvgImage,
}

export const Default = {
  render: () => <SvgImage src="https://s.cdpn.io/3/kiwi.svg" recolor />,
  name: 'default',
}
