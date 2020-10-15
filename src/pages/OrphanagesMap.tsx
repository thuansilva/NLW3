import React from 'react';

import mapMarkerImg from '../images/map-marker.svg'
import { FiPlus} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


import "../styles/page/orphanages-map.css"

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                <strong>Amazonas</strong>
                <span>Manaus</span>
                </footer>
            </aside>
            <Map 
            center={[-3.0376587,-59.9453052]}
            zoom={15}
            style={{width:'100%',height:'100%'}}
            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            </Map>
                <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="#FFF"/>
                </Link>
        </div>
    );
}

export default OrphanagesMap;