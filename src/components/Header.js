import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' color='green' onClick={onClick}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
