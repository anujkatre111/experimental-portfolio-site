import { Link } from 'react-router-dom'
import Craftss from './Craftss'
import { componentRegistry } from '../componentRegistry'

const Crafts = () => {
  return (
    <div className="flex flex-col gap-[18px]">
      <h1>Crafts</h1>

      <div className="flex flex-col gap-[4px]">
        {componentRegistry.map((item) => (
          <Link key={item.id} to={`/crafts/${item.slug}`}>
            <Craftss
              name={item.title}
              description="This is a craft"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Crafts
