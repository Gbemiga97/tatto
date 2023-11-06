import { data } from "../utils"


const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[1.8rem]">
      {
        data.socialData.map(({href, icon}, i) => (
          <li>
            <a href={href}>{icon}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Socials