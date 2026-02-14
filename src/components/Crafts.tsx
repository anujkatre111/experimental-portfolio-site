import { Link } from 'react-router-dom'
import Craftss from './Craftss'
import { componentRegistry } from '../componentRegistry'
import AnimateOnMount from './AnimateOnMount'

const Crafts = () => {
  return (
    <div className="flex flex-col gap-[18px]">
      <AnimateOnMount delay={0}>
        <h1>Crafts</h1>
      </AnimateOnMount>

      <div className="flex flex-col gap-[4px]">
        {componentRegistry.map((item, index) => (
          <AnimateOnMount key={item.id} delay={100 + index * 80}>
            <Link to={`/crafts/${item.slug}`}>
              <Craftss
                name={item.title}
                description="This is a craft"
              />
            </Link>
          </AnimateOnMount>
        ))}
      </div>
    </div>
  )
}

export default Crafts
