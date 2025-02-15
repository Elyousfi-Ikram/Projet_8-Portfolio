import Modal from '../modals/modal';
import data from '../../datas/projets.json';

import './projets.scss';


function Projets() {
    return (
        <div id='projets'>
            <h1>Mes projets <hr /></h1>
            <div className="btn-projet">
                {data.map((item) => (
                    <Modal
                        key={item.title}
                        title={item.title}
                        titleProjet={item.titleProjet}
                        objectifs={item.objectifs}
                        infoProjet={item.infoProjet}
                        maquettes={item.maquettes}
                        URLcode={item.URLcode}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projets;
