export default function QuizCard({ thumbnail, title, guest }) {
  return (
    <div id="quizCardContent">
      <p id="guestName">{guest}</p>
      <img src={`${import.meta.env.VITE_BACKEND_URL}/${thumbnail}`} alt="" />
      <p id="quizTitle">{title}</p>
    </div>
  )
}
