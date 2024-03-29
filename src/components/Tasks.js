import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks,onDelete}) => {
    return (
        <div>
            {
                tasks.map((task) => (                    
                    <Task key={task.id} task={task} onDelete={onDelete} />
                ))
            }
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks