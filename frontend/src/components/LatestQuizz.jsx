const LatestQuizz = () => {
  const LatestVideos = [
    "https://www.youtube.com/embed/q-rVcT0tpj0",
    "https://www.youtube.com/embed/TeW5tlALx_I",
    "https://www.youtube.com/embed/_x8lmFjSB0A",
    "https://www.youtube.com/embed/VwP9Ikznkgw",
  ]

  return (
    <div className="videosContainer">
      {LatestVideos.map((video) => (
        <iframe
          width="166.37"
          height="95.65"
          src={video}
          title="Latest Video"
          frameBorder="0"
          allowFullScreen
          className="videos"
          key="caca"
        />
      ))}
    </div>
  )
}

export default LatestQuizz
