import pumaModel1 from '../../assets/puma/puma1.webp'
import pumaModel2 from '../../assets/puma/puma2.webp'
import pumaModel3 from '../../assets/puma/puma3.webp'
import {Link} from "react-router-dom";

export type PumaItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: 1,
        model: 'PUMA MAPF1 CA Pro Crush AW24',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,

    },
    {
        id: 2,
        model: 'PUMA All-Pro NITRO™ 2 Represent 247',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA Cell Solar SS26',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]

export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                { pumaArr.map( puma => (
                    <Link key={puma.id} to={`/puma/${puma.id}`}>
                        <img alt={puma.model}
                             src={puma.picture}
                             style={{width: '200px', height: 'auto', marginRight: '10px'}}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

