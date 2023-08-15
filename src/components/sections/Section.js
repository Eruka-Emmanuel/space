import { NavLink} from 'react-router-dom';

const Section = (props) => {

    let section = props.section;

    return (
        <div>
            <div className='nav-link-shaded-background-App smaller-font-size-App my-2 text-center'>
                <NavLink to={`/${section}`} className='nav-link-App px-3 py-1'>
                    {section}
                </NavLink>
             </div>
        </div>
    )
} 
export default Section;