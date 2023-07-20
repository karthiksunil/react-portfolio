/* eslint-disable no-unused-vars */
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCcApplePay,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faChessKing,
  faDumbbell,
  faJedi,
  faPhotoFilm,
} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            lKind of a step down from a from a golden palace for an Avenger
            highness and whatnot. Oh, he's gonna answer to us. Odin can have
            what's left. And I'm gonna need that case, that's been SHIELD
            property for over 70 years. Hey! Holy cow. You will not believe
            what's been going on. Do you remember when we were in space? And I
            got all dusty? I must've passed out, 'cause I woke up, and you were
            gone. But Doctor Strange was there, right? He was like, "It's been
            five years. Come on, they need us!" And then he started doing the
            yellow sparkly thing that he does all the time...What are you doing?{' '}
          </p>
          <p>
            But it's now dead in the water. We're 1000 light years from the
            nearest 7-11. Oxygen will run out tomorrow. And that'll be it. And
            Pep, been five years. Come on, they need us!" And then he started
            doing the yellow sparkly thing that he does all the time...What are
            you doing? It's time for me to be who I am rather than who I'm
            supposed to be. But you, you're a leader. That's who you are.
          </p>
          <p>
            You know, if it wasn't for the existential terror of staring into a
            void of space, I'd say I'm feeling better today. The infection's run
            its course, Thanks to the blue meanie back there. I said, "we'd
            lose". You said, "We'll do that together too." And guess what, Cap?
            We lost. And you weren't there.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCcApplePay} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faChessKing} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDumbbell} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPhotoFilm} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
