import { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const Home = () => {

    const [todos, setTodos] = useState<Array<any>>([])
    const [inputValue, setInputValue] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setTodos((prevState) => {
                return [...prevState, data.data]
            });
        }
        if(inputValue.length > 1) {
            fetchData()
            setLoading(false);
        }
    }, [inputValue])

    const handleInputValue = debounce(e => setInputValue(e.target.value), 1000)

    return(
        <>
            <h1>Home!</h1>
            <p>La la la la</p>
            <form>
                <input
                    type="text"
                    onChange={handleInputValue}
                />
                {inputValue}
            </form>
            {loading ? <p>Loading...</p> : null}
            {todos.map((todo) => {
                return <p>{todo.title}</p>
            })}
        </>
    )
}

export default Home;