import './App.css';
import {Header} from "./site/Header.tsx";
import {Body} from "./site/Body.tsx";
import {Footer} from "./site/Footer.tsx";

export function App() {
    return (
        <div className='App'>
            <Header title={'Header props'} />
            <Body title={'Body props'} />
            <Footer title={'Footer props'} />
        </div>
    );
}
