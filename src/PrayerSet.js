import React from 'react';

export default function(props) {
    const className = ['prayer-set'];
    props.all && className.push('prayer-set-all')
    return (
        <div className={className.join(' ')}>
            {props.all && 
                <>
                    <div className="prayer-label prayer-label-all">All</div>
                    <div className="prayer-body prayer-body-all">{props.content || props.children}</div>
                </>}
            {props.leader && 
                <>
                    <div className="prayer-label prayer-label-leader">Leader</div>
                    <div className="prayer-body prayer-body-leader">{props.content || props.children}</div>
                </>}
        </div>
    )
}
