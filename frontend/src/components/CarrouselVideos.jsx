import "./CarrouselVideos.scss"

const CarrouselVideos = ({ videos, onChange, selectedVideo }) => {
  const handleVideoChange = (video) => {
    onChange(video)
  }

  return (
    <div>
      {Object.keys(videos).map((option) => (
        <button
          key={option}
          onClick={() => handleVideoChange(option)}
          className={`notClicked ${selectedVideo === option ? "clicked" : ""}`}
        ></button>
      ))}
    </div>
  )
}

export default CarrouselVideos
