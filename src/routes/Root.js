import {Outlet} from 'react-router-dom';

import SpaceNavbar from '../components/spaceNavbar/SpaceNavbar';
import Sections from '../components/sections/Sections';
import UserProfile from '../components/userProfile/UserProfile';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import MarkretDayCalculator from '../components/market-day-calculator/MarketDayCalculator';

function Root() {
    return (
        <div className='root'>
            <SpaceNavbar />
            <div className='container-fluid px-xxl-5'>
                <div className='row px-md-1 px-xl-5'>
                    <div className='col-12 col-lg-3 px-xl-3'>
                        <ErrorBoundary>
                           <UserProfile /> 
                        </ErrorBoundary>
                    </div>
                    <div className='col-12 col-lg-6 px-lg-0'>
                        <Outlet />
                    </div>
                    <div className='col-12 col-lg-3 px-xl-3'>
                        <Sections />
                        <div className='mt-3'>
                           <MarkretDayCalculator /> 
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    )
}
export default Root;