import { FiSearch } from 'react-icons/fi'
import './search.css';

function Search(){
    return(
    <div className="border border-blue-900 w-max mx-auto my-8">
        <div className="searchBar_main">
            <div className="flex searchBar search_text">
                <input className='bg-white p-1 outline-none' type="text" placeholder="Search Category"/>
                <span className ='bg-gray-300 flex items-center p-1 text-xl'><FiSearch /></span>
            </div> 
        </div>
    </div>
    )
}
export default Search;