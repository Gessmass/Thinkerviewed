export default function QuestionCard() {
  return (
    <div id="questionCardContent">
      <div id="questionInCard">
        <h3>Question</h3>
      </div>
      <div id="answerArea">
        <div id="answerTiles">
          <div id="tile1" className="tile">
            <p id="answer1">Réponse 1</p>
          </div>
          <div id="tile2" className="tile">
            <p id="answer2">Réponse 2</p>
          </div>
          <div id="tile3" className="tile">
            <p id="answer3">Réponse 3</p>
          </div>
          <div id="tile4" className="tile">
            <p id="answer4">Réponse 4</p>
          </div>
        </div>
        <div id="timeCode">1:20:35</div>
      </div>
    </div>
  )
}
