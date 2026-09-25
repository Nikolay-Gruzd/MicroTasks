import adidasModel1 from '../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from '../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasModel3
    from '../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {Link} from "react-router-dom";

export type AdidasItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const Adidas = () => {
    return (
        <div>
            <h2> ADIDAS</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {adidasArr.map((adidas) => (
                    <Link key={adidas.id} to={`/adidas/${adidas.id}`}>
                        <img alt={adidas.model}
                             src={adidas.picture}
                             style={{width: '200px', height: 'auto', marginRight: '10px'}}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

