import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
} as const

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Навигация:
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path='/' element={<Navigate to={PATH.ADIDAS} />}/>*/}
                    {/*    <Route path={PATH.ADIDAS} element={<Adidas />}/>*/}
                    {/*    <Route path={PATH.PUMA} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.ABIBAS} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*    /!*<Route path={`/:adidas/:id`} element={<Model page={PATH.PAGE1}/>}/>*!/*/}
                    {/*    /!*<Route path={`/:puma/:id`} element={<Model page={PATH.PAGE2}/>}/>*!/*/}
                    {/*    /!*<Route path={`/:model/:id`} element={<Model/>}/>*!/*/}
                    {/*    <Route path={`/:model/:id`} element={<Model/>}/>*/}

                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}