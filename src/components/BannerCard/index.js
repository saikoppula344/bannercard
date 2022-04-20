import './index.css'

const BannerCard = props => {
  const {eachItem} = props
  const {headerText, description, className} = eachItem
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="text-header">{headerText}</h1>

        <p className="description">{description}</p>
        <button type="button" className="show-more">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCard
