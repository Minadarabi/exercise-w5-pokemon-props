

export const Header = () => {
    const imageObject = {
        imgUrl: "https://assets.stickpng.com/images/612ce4761b9679000402af1c.png",
        imgAlt: "logo pokemon"
    }
    const headerText = "pokemon goes here"
  return (
    <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <p>{headerText}</p>
    </header>
  )
}
