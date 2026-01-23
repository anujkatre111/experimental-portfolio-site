import { useParams } from 'react-router-dom'
import { componentRegistry } from '../componentRegistry'
import CodeBlock from './CodeBlock'

type RegistryItem = (typeof componentRegistry)[number]

const CraftsPage = () => {
  const { id } = useParams()

  const componentData = componentRegistry.find(
    (item: RegistryItem) => item.id === id || item.slug === id
  ) as RegistryItem | undefined

  if (!componentData) {
    return <h1>Component not found</h1>
  }

  const { Component, defaultProps, code, title } = componentData

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="border p-6 rounded-lg">
        <Component {...defaultProps} />
      </div>

      <CodeBlock code={code} />
    </div>
  )
}

export default CraftsPage
