import "./HomeButtons.scss"

const HomeButtons = ({ videos, selectedVideo, selectedVideoUrl, onChange }) => {
  return (
    <div>
      {videos.map((videoId) => (
        <label key={videoId}>
          <input
            className={selectedVideoUrl ? "caca" : "cacatata"}
            type="radio"
            value={videoId}
            checked={selectedVideo === videoId}
            onChange={() => onChange(videoId)}
          />
        </label>
      ))}
    </div>
  )
}

export default HomeButtons
