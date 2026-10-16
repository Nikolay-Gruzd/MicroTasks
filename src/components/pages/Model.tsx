import {adidasArr, AdidasItem} from "./Adidas.tsx";
import {pumaArr, PumaItem} from "./Puma.tsx";
import {useParams} from "react-router-dom";

type SneakersModel = {
    [key: string]: (AdidasItem[] | PumaItem[])
}
const sneakersModel: SneakersModel = {
    adidas: adidasArr,
    puma: pumaArr,
}

export const Model = () => {
    const {model, id} = useParams()
    console.log(model)
    console.log(id)

    // const arr = page === '/adidas' ? adidasArr : page === '/puma' ? pumaArr : null
    const item = model ? sneakersModel[model].find(el => el.id === Number(id)) : null;

    // проверка: есть ли элемент по такому индексу
    if (!item) {
        return <h2 style={{ display: 'flex', justifyContent: 'center'}}>Модель отсутствует</h2>
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h2>{item.model}</h2>
            <h2>{item.collection}</h2>
            <h2>{item.price}</h2>
            <img
                alt={'sneakers'}
                src={item.picture}
                style={{ width: '500px', paddingBottom: '10px' }}
            />
        </div>
    )
};