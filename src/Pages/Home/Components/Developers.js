import DeveloperCard from "./DeveloperCard"

export default function Developers(props){

    // List to make Developers dynamic  

    const developers = [
        {
            name: 'Menassie Ermias',
            role: 'Front End Developer',
            imgUrl: 'https://picsum.photos/id/236/300/300',
            linkedInUrl: 'https://www.linkedin.com/in/menassie-ermias-202b60200/'
        },
        {
            name: 'Nahom Taddesse',
            role: 'Back End Developer',
            imgUrl: 'https://picsum.photos/id/239/300/300',
            linkedInUrl: 'https://www.linkedin.com/in/menassie-ermias-202b60200/'
        },
        {
            name: 'Henock Urgessa',
            role: 'Project Manager',
            imgUrl: 'https://picsum.photos/id/227/300/300',
            linkedInUrl: 'https://www.linkedin.com/in/menassie-ermias-202b60200/'
        }
        
    ]

    // Make List Items

    const developersList = developers.map( developer => {
        return (
            <DeveloperCard 
                imgUrl={developer.imgUrl}
                name={developer.name}
                role={developer.role}
                linkedInUrl={developer.linkedInUrl}
            />
        )
    } )

    return (
        <section className="developers--container" id="contact">
            {developersList}
        </section>
    )
}