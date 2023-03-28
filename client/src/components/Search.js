import {FiSearch} from 'react-icons/fi'
function Search(){
    return(
    <div className="border border-blue-900 w-max mx-auto my-8">
        <div className="searchBar">
            <div className="flex ">
                <input className='bg-gray-300 p-1 outline-none' type="text" placeholder="Search Article"/>
                <span className ='bg-gray-300 flex items-center p-1 text-xl'><FiSearch /></span>
            </div> 
        </div>
    </div>
    )
}
export default Search;