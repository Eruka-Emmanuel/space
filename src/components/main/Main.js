import { Outlet} from 'react-router-dom';

import './Main.css';

const Main = (props) => {
    return (
        <div className='main fillet-border-sm-App light-border-outline-App px-3 py-5' style={{height:'800px'}}>
            <Outlet />
        </ div>
    )
}
export default Main;