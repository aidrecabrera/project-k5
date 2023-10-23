import React from 'react'

export default function InvolvedOrganization({ name, website, description }) {
return (
    <div className="organization">
        <h2>{name}</h2>
        <p>
        <strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
        </p>
        <p>{description}</p>
    </div>
    );
}
