import {Link} from 'react-router-dom'
import Button from '../Components/Button'
export default function Home(){
    return (
        <main className='min-h-screen min-w-screen bg-white flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>
                Home page
            </h1>

            <div className='flex gap-4 my-4 text-white'>
                <Link to="/counter">
                <Button className='rounded-md px-2 py-2 bg-green-600'>
                    Counter App
                </Button>
                </Link>
           
                <Link to="/form">
                <Button className='rounded-md px-2 py-2 bg-red-600 '>
                    Form
                </Button>
                </Link>
            </div>

        </main>
    );
}