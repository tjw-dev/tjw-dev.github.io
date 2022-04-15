import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Link({ href, title, icon }) {
  return (
    <div>
      <a href={href} title={title}>
        <FontAwesomeIcon icon={icon} size='1x' className='px-1' />
      </a>
    </div>
  )
}
