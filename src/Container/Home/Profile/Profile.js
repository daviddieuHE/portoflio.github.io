import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Je suis...
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typical 
                            loop={'infinity'}
                            steps={[
                                "Animateur de télévision",
                                1000,
                                "Praticien de la santé",
                                1000,
                                "Vidéaste",
                                1000,
                                "Dirigeant d'entreprise", 
                                1000,
                                "Étudiant en informatique",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'></span>
                        Au final, juste un humain qui s'interesse à ce qui l'entoure.
                    </span>
                </div>
                <div className='profile-options'>
                    <a href='curriculum vitae_DIEU copie.pdf' download='curriculum vitae_DIEU copie.pdf'>
                        <button className='btn highlighted-btn'>Télécharger mon CV</button>
                    </a>
                </div>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.instagram.com/dav_dieu/' target="_blank"> 
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCRNi6Ld4PEWOUxkUKxrId0w' target="_blank"> 
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/david-dieu/' target="_blank"> 
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>
                </div> 
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
