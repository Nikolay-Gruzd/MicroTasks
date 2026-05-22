import './App.css';
import {useState} from "react";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";

export function App() {
    // Data //
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    let [title, setTitle] = useState('');

    // Functions //
    const addMessage = (title: string) => {
        setMessage([
            {message: title},
            ...message,
        ])
    }

    // Handlers //
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className='App'>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            } )}
        </div>
    );
}
