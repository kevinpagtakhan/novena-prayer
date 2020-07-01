import React from 'react';

export default function(props) {
    return (
        <div id={props.id || 'PrayerGroup'}>
            <div className="prayer-group">
                {props.children}
            </div>
            <hr className="prayer-group-divider" />
        </div>
    )
}
