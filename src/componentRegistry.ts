// componentRegistry.ts
import Button from './Crafts/Button'
import { buttonCode } from './Code/button.code'

export const componentRegistry = [
  {
    id: '1',
    slug: 'button',
    title: 'Button',
    Component: Button,   // actual React component
    defaultProps: {
      label: 'Click me'
    },
    code: buttonCode     // code string shown in CodeBlock
  }
]