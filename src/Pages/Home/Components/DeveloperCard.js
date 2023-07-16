import {FaTwitter} from "react-icons/fa"


export default function DeveloperCard({imgUrl, name, role, linkedInUrl}){


    return(
        <div className="card">
            <img src={imgUrl} className="card--img" />
            <h4 className="card--name">{name}</h4>
            <h5 className="card--role">{role}</h5>
            <a target="_blank" className="card--linkedin-link" href={linkedInUrl}><FaTwitter className="card--link-icon" /></a>
        </div>
    )
}