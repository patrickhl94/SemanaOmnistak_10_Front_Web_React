import React from 'react'

import './style.css'

export default function DevItem({ devs }) {

    return (
        <li key={devs._id} className="dev-item">
            <header>
                <img src={devs.avatar_url} alt="Patrick Lima" />
                <div className="user-info">
                    <strong> {devs.name} </strong>
                    <span> {devs.techs.join(', ')} </span>
                </div>
            </header>
            <p> {devs.bio} </p>
            <a href={`https://github.com/${devs.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}