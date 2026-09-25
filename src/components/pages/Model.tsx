import {adidasArr} from "./Adidas.tsx";
import {pumaArr} from "./Puma.tsx";
import {useParams} from "react-router-dom";

type Props = {
    page: string
}

export const Model = ({page}:Props) => {
    const params = useParams()
    console.log(params)

    const arr = page === '/Adidas' ? adidasArr : page === '/Puma' ? pumaArr : null
    // const item = arr?.[Number(params.id)]
    const item = arr?.find(el => el.id === Number(params.id))

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