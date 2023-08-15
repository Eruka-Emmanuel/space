import { useRouteError } from 'react-router-dom';

import SpaceNavbar from '../components/spaceNavbar/SpaceNavbar';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <SpaceNavbar />
            <h3>Oops! Page not found</h3>
        </>
    )
}
export default ErrorPage;