import { useFilterStore } from "../Store/Store"

const Search: React.FC = ()=> {
    const {searchTerm, setSearchTerm} = useFilterStore();

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
            <input
            type="search"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            className="block w-[300px] p-2 border border-gray-300 rounded-md"
            />
        </div>
    )
}
export default Search