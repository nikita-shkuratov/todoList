import React from 'react';

export const Notes = (props) => {
    return (
        <ul class="list-group">
            {props.notes.map(note => (
                <li class="list-group-item note" key={note.id}>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    )
}