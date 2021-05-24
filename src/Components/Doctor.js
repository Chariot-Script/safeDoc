import React from 'react'
import moment from 'moment'

function Doctor({doctor}) {
    return (
        <div>
            <p>{moment.unix(doctor.data.created).format('MMMM Do YYYY, h:ma')}</p>
            {doctor.data.doctor?.map(doctor => (
                <p>id={doctor.id}</p>
            ))}
        </div>
    )
}

export default Doctor
