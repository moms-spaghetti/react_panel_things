import React from 'react'
import { v4 as uuidv4 } from 'uuid'


function CreateCard({ data }) {

    const { id, name, desc, parts, imgurl } = data

    return (
        <section key={id}>
            <h2>{name}</h2>
            <article>
                <p>{desc}</p>
                <ul>
                {parts.map((value, index) => {
                    return<li key={uuidv4()}>{value}</li>
                })}
                </ul>
                <img src={imgurl}></img>
            </article>
        </section>
    )
}

export default CreateCard