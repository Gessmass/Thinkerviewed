import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Magnifier from "../assets/images/Magnifier.png"

const Categories = () => {
  const [questionnary, setQuestionnary] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  // const filteredQuestionnaries = questionnary.filter((questionnary) => {
  //   if (selectedCategory === null) {
  //     return true
  //   } else {
  //     return questionnary.categorie.includes(selectedCategory)
  //   }
  // })

  const filterByCategory = (question) => {
    if (selectedCategory === null) {
      return true
    } else {
      return question.categorie.includes(selectedCategory)
    }
  }

  // Filtrer en fonction de la recherche
  const filterBySearch = (question) => {
    if (searchQuery.trim() === "") {
      return true
    } else {
      return (
        question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        question.protagonist
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        question.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  }

  const filteredQuestionnaries = questionnary.filter(
    (question) => filterByCategory(question) && filterBySearch(question)
  )

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/questionnary/`)
      .then((res) => {
        setQuestionnary(res.data)
      })
      .catch((err) => {
        console.info("Erreur lors de la récupération du questionnaire", err)
      })
  }, [])

  // console.log(questionnary)
  // console.log(selectedCategory)
  return (
    <div id="mainDivCat">
      <div id="titleCat">
        <span>CATEGORIES</span>
      </div>
      <div id="searchBarCat">
        <input
          type="text"
          placeholder="Sujet ou invité..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={Magnifier} alt="a little magnifier" />
      </div>
      <div id="themesCat">
        <div id="titleThemes">
          <span>Thèmes :</span>
        </div>
        <div id="buttonsThemes">
          <div id="lignOneThemes">
            <button
              type="button"
              onClick={() => handleCategoryClick("Energie")}
              className={selectedCategory === "Energie" ? "active" : ""}
            >
              Énergie
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Sciences")}
              className={selectedCategory === "Sciences" ? "active" : ""}
            >
              Sciences
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Societe")}
              className={selectedCategory === "Societe" ? "active" : ""}
            >
              Société
            </button>
          </div>
          <div id="lignTwoThemes">
            <button
              type="button"
              onClick={() => handleCategoryClick("Medias")}
              className={selectedCategory === "Medias" ? "active" : ""}
            >
              Médias
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Terrorisme")}
              className={selectedCategory === "Terrorisme" ? "active" : ""}
            >
              Terrorisme
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Environnement")}
              className={selectedCategory === "Environnement" ? "active" : ""}
            >
              Environnement
            </button>
          </div>
          <div id="lignThreeThemes">
            <button
              type="button"
              onClick={() => handleCategoryClick("Economie et Finance")}
              className={
                selectedCategory === "Economie et Finance" ? "active" : ""
              }
            >
              Économie et Finance
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Geopolitique")}
              className={selectedCategory === "Geopolitique" ? "active" : ""}
            >
              Géopolitique
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Internet et Technologie")}
              className={
                selectedCategory === "Internet et Technologie" ? "active" : ""
              }
            >
              Internet et Technologies
            </button>
          </div>
        </div>
      </div>
      {filteredQuestionnaries.map((questionnary, index) => (
        <Link
          to={`/quizzSelon/${questionnary.id}`} // Utilisez l'ID de l'objet dans l'URL
          key={index}
        >
          <div id="resultDisplay" key={index}>
            <div id="protagonistName">
              <span>{questionnary.protagonist}</span>
            </div>
            <div id="miniaturePic">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  questionnary.miniature
                }`}
                alt="miniature"
              />
            </div>
            <div id="titleTopic">
              <span>{questionnary.title}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories
