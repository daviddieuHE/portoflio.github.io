import React from 'react'
import './Tableau.css'
import { useState } from 'react';

import Popup from '../../components/popup'
import logo1 from '../../assets/details/1.png'
import logo2 from '../../assets/details/2.png'
import logo3 from '../../assets/details/3.png'
import logo4 from '../../assets/details/4.png'
import logo5 from '../../assets/details/5.png'
import logo6 from '../../assets/details/6.png'
import logo7 from '../../assets/details/7.png'
import logo8 from '../../assets/details/8.png'
import logo9 from '../../assets/details/9.png'
import logo10 from '../../assets/details/10.png'
import logo11 from '../../assets/details/11.png'
import logo12 from '../../assets/details/12.png'
import logo13 from '../../assets/details/13.png'
import logo14 from '../../assets/details/14.png'
import logo15 from '../../assets/details/15.png'
import logo16 from '../../assets/details/16.png'




export default function vision() {
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);
    const [buttonPopup4, setButtonPopup4] = useState(false);
    const [buttonPopup5, setButtonPopup5] = useState(false);
    const [buttonPopup6, setButtonPopup6] = useState(false);
    const [buttonPopup7, setButtonPopup7] = useState(false);
    const [buttonPopup8, setButtonPopup8] = useState(false);
    const [buttonPopup9, setButtonPopup9] = useState(false);
    const [buttonPopup10, setButtonPopup10] = useState(false);
    const [buttonPopup11, setButtonPopup11] = useState(false);
    const [buttonPopup12, setButtonPopup12] = useState(false);
    const [buttonPopup13, setButtonPopup13] = useState(false);
    const [buttonPopup14, setButtonPopup14] = useState(false);
    const [buttonPopup15, setButtonPopup15] = useState(false);
    const [buttonPopup16, setButtonPopup16] = useState(false);



  return (
    <div className='tableau'>
        <div className='tableau-parent'>
                    <div className='heading-container'>
                        <div className='screen-heading'>
                            <span className='primary-text'>
                                {""}
                                Mes occupations sous forme de tableau
                            </span>
                        </div>
                        <div className='screen-subheading'>
                            <span className='secondary-text'>
                                {""}
                                Voici quelques unes de mes occupations extra-scolaire dont je vous fait part afin de les Valorisées.
                            </span>
                        </div>
                        <div className='heading-separator'>
                            <div className='separator-line'>
                            </div>
                            <div className='separator-blob'>
                                    <div></div>
                            </div>
                        </div>
                    </div>
            <div className='tableau-tableau'>
                <table>
                    <thead>
                        <tr>
                            <th className='th1_style'>Thématique</th>
                            <th className='th2_style'>Intitulé</th>
                            <th className='th3_style'>H. Réelles</th>
                            <th className='th4_style'>H. Valorisées</th>
                            <th className='th5_style'>Détails</th>
                        </tr>
                    </thead>
                    <tbody className='tbody_corps'>
                        <tr className='valorise'>
                            <td>Entreprenariat</td>
                            <td>Étudiant d'indépendant </td>
                            
                            <td className='heures'>+ 1 000h</td>
                            <td className='heures'>10h</td> 
                            <td>
                                <button onClick={() => setButtonPopup1(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Entreprenariat</td>
                            <td>Administration de ma SRL</td>
                            <td className='heures'>+ 200h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup2(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Pratique professionelle</td>
                            <td>Technologue en imagerie médicale</td>
                            <td className='heures'>+ 1 000h</td>
                            <td className='heures'>10h</td>
                            <td>
                                <button onClick={() => setButtonPopup3(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pratique professionelle</td>
                            <td>Annimateur de télévision</td>
                            <td className='heures'>+ 200h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup4(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Formation</td>
                            <td>cours react sur skillshare</td>
                            <td className='heures'>8h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup5(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Formation</td>
                            <td>cours SQL sur Openclassroom</td>
                            <td className='heures'>20h</td>
                            <td className='heures'>10h</td>
                            <td>
                                <button onClick={() => setButtonPopup6(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Formation</td>
                            <td>Cours UX Design sur Openclassroom</td>
                            <td className='heures'>8h</td>
                            <td className='heures'>5h</td>
                            <td>
                                <button onClick={() => setButtonPopup7(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Formation</td>
                            <td>Cours Scrum sur Openclassroom</td>
                            <td className='heures'>8h</td>
                            <td className='heures'>5h</td>
                            <td>
                                <button onClick={() => setButtonPopup8(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Social</td>
                            <td>Délégué de classe </td>
                            <td className='heures'>20h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup9(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Social</td>
                            <td>Administrateur au conseil étudiant</td>
                            <td className='heures'>30h</td>
                            <td className='heures'>10h</td>
                            <td>
                                <button onClick={() => setButtonPopup10(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Expérience internationale</td>
                            <td>Semaine internationale en Afrique du sud</td>
                            <td className='heures'>38h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup11(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Expérience internationale</td>
                            <td>Erasmus en république tchèque</td>
                            <td className='heures'>+ 350h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup12(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Conférence</td>
                            <td>Dev day</td>
                            <td className='heures'>9h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup13(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='valorise'>
                            <td>Conférence</td>
                            <td>Etat de l'Union 2022</td>
                            <td className='heures'>+ 12h</td>
                            <td className='heures'>10h</td>
                            <td>
                                <button onClick={() => setButtonPopup14(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Hobbie</td>
                            <td>Modélisation/impression 3D</td>
                            <td className='heures'>+ 200h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup15(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Hobbie</td>
                            <td>Minage de cryptomonnaie </td>
                            <td className='heures'>+ 200h</td>
                            <td className='heures'>0h</td>
                            <td>
                                <button onClick={() => setButtonPopup16(true)}>Détails</button>
                            </td>
                        </tr>
                        <tr className='total'>
                            <td></td>
                            <td className='total_tt'>Total :</td>
                            <td className='heures'>+ 3503h</td>
                            <td className='heures'>60h</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1} >
                <img src={logo1}/>
            </Popup>
            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2} >
                <img src={logo2}/>
            </Popup>
            <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3} >
                <img src={logo3}/>
            </Popup>
            <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4} >
                <img src={logo4}/>
            </Popup>
            <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5} >
                <img src={logo5}/>
            </Popup>
            <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6} >
                <img src={logo6}/>
            </Popup>
            <Popup trigger={buttonPopup7} setTrigger={setButtonPopup7} >
                <img src={logo7}/>
            </Popup>
            <Popup trigger={buttonPopup8} setTrigger={setButtonPopup8} >
                <img src={logo8}/>
            </Popup>
            <Popup trigger={buttonPopup9} setTrigger={setButtonPopup9} >
                <img src={logo9}/>
            </Popup>
            <Popup trigger={buttonPopup10} setTrigger={setButtonPopup10} >
                <img src={logo10}/>
            </Popup>
            <Popup trigger={buttonPopup11} setTrigger={setButtonPopup11} >
            <   img src={logo11}/>
            </Popup>
            <Popup trigger={buttonPopup12} setTrigger={setButtonPopup12} >
                <img src={logo12}/>
            </Popup>
            <Popup trigger={buttonPopup13} setTrigger={setButtonPopup13} >
                <img src={logo13}/>
            </Popup>
            <Popup trigger={buttonPopup14} setTrigger={setButtonPopup14} >
                <img src={logo14}/>
            </Popup>
            <Popup trigger={buttonPopup15} setTrigger={setButtonPopup15} >
                <img src={logo15}/>
            </Popup>
            <Popup trigger={buttonPopup16} setTrigger={setButtonPopup16} >
                <img src={logo16}/>
            </Popup>

        </div>
    </div>
  )
}

