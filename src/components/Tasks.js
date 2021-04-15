import React from 'react';
import Card from './Card'

const Tasks = props => {
    return (
            <Card id="card-1" className="card" draggable="true">
                { props.task.title }
            </Card>
    )
};

export default Tasks;


/*<div className="list-items status">
    { props.task.column }
</div>
<div className="list-items type">
    { props.task.type }
</div>*/