import { Link } from "react-router-dom"
import {FontAweSomeIcon} from "@fortawesome/react-fontawesome"
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import {useNavigate, Link, useLocation} from "react-router-dom"

import {useSendLogoutNutation} from '../features/auth/authApiSlice'

const DashHeader = () => {
    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">AkyolKDB techNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
    )

    return content
}

export default DashHeader