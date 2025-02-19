import { FaRegHandPointLeft } from 'react-icons/fa';
import './about.scss';
import { FaRegHandPointRight } from 'react-icons/fa6';

function About() {
    return (
        <div id="about-me">
            <div className='text'>
                <h1>A propos de moi <hr /></h1>
                <p>
                    Passionnée par le web et toujours à la recherche de nouveaux défis, je crée des interfaces modernes, fluides et accessibles, en mettant l'expérience utilisateur au cœur de mes projets. Spécialisée en développement front-end : faire en sorte que chaque site soit élégent, réactif et agréable à utiliser.
                    Je possède également les compétences de bases en back-end, ce qui me permet de mieux comprendre l'ensemble d'un projet et de bosser efficacement avec d'autres développeurs. Curieuse et toujours en veille, j'adore explorer les nouvelles tendances et tester des solutions innovantes pour créer des sites performants et actuels.
                </p>
                <p className='text-link'>
                    N'hésitez pas à me contacter ou à consulter mon
                    <a href="/asset/CV.pdf" target="_blank" rel="noopener noreferrer" className='link-cv'> CV <FaRegHandPointLeft className='icon' /> </a> .
                </p>
            </div>
        </div>
    );
}

export default About;
