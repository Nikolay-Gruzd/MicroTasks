import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";
import {Error404} from "./components/pages/Error404.tsx";

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
} as const

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            Page1
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            Page2
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            Page3
                        </NavLink>
                    </S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PAGE1} />}/>
                        <Route path={PATH.PAGE1} element={<PageOne />}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                        {/*<Route path={PATH.PAGEERROR404} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={PATH.PAGEERROR404}/>}/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}