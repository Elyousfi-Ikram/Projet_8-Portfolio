import { FaRegHandPointLeft } from 'react-icons/fa';
import './about.scss';
import { FaRegHandPointRight } from 'react-icons/fa6';

function About() {
    return (
        <div id="about-me">
            <div className='text'>
                <h1>A propos de moi <hr /></h1>
                <p>
                    Autonome et toujours en quête de nouveaux défis, je suis passionnée par les technologies de pointe et le perfectionnement de mes compétences.
                    Enthousiaste et polyvalente, je conçois et réalise des sites web, de l'élaboration du cahier des charges jusqu'à leur mise en ligne, tout en plaçant l'utilisateur au cœur de mes projets.
                    Sensible à l'expérience utilisateur et à l'accessibilité, je m'efforce de développer des solutions centrées sur l'humain.
                    Attentive aux attentes, je veille à satisfaire pleinement chaque client.
                </p>

                <p>
                    Passionnée par le développement web et toujours en quête de nouveaux défis, je conçois et intègre des interfaces modernes, performantes et intuitives. Spécialisée en développement front-end, je maîtrise la création d'expériences interactives en alliant design, accessibilité et performance. Sensible à l'expérience utilisateur, je veille à concevoir des solutions ergonomiques et engageantes.
                    Ayant également des notions en back-end, je suis capable de collaborer efficacement avec les équipes techniques pour assurer une intégration fluide entre l’interface utilisateur et la logique serveur. Rigoureuse et organisée, j’accorde une grande importance à la planification et au suivi des projets, en utilisant des outils de gestion comme Notion ou Trello pour structurer chaque étape du développement.
                    Curieuse et proactive, je reste en veille constante sur les dernières tendances et bonnes pratiques du web, afin d’adopter des solutions innovantes et optimisées.
                </p>

                <p>
                    Passionnée par le web et toujours à la recherche de nouveaux défis, je crée des interfaces modernes, fluides et accessibles, en mettant l’expérience utilisateur au cœur de mes projets. Mon truc, c’est le développement front-end : faire en sorte que chaque site soit beau, réactif et agréable à utiliser.
                    J’ai aussi des bases en back-end, ce qui me permet de mieux comprendre l’ensemble d’un projet et de bosser efficacement avec d’autres développeurs. Et comme j’aime que tout soit bien organisé, je m’appuie sur des outils comme Notion ou Trello pour structurer et suivre l’avancement des projets.
                    Curieuse et toujours en veille, j’adore explorer les nouvelles tendances et tester des solutions innovantes pour créer des sites performants et actuels.
                </p>

                <p className='text-link'>
                    N'hésitez pas à me contacter ou à consulter mon
                    <a href="/asset/CV.pdf" target="_blank" rel="noopener noreferrer" className='link-cv'> CV <FaRegHandPointLeft className='icon'/> </a> .
                </p>
            </div>
        </div>
    );
}

export default About;
