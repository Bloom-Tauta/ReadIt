import { FiSearch } from 'react-icons/fi'
import './search.css';

function Search({search,setSearch}){
    return(
    <div className="border border-blue-900 w-max mx-auto my-8">
        <div className="searchBar">
            <div className="flex ">
                <input  value={search} onChange={(e)=> setSearch(e.target.value)}                  
                className='bg-gray-300 p-1 outline-none' type="text" placeholder="Search Category"/>
                <span className ='bg-gray-300 flex items-center p-1 text-xl'><FiSearch /></span>
            </div> 
        </div>
    </div>
    )
}
export default Search;