import { useState } from 'react'



function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const Searchkey = (e) => {
        if ((e.key === "Enter")) {
            onSearchChange();
        }
    }

    return (
        <>
            <div>
                Cari Artickel : <input onChange={(e) => setSearch(e.target.value)} 
                onKeyDown={Searchkey}></input>
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {props.totlaPosts} data dari kata {search}</small>
        </>
    );
}


export default Search;


// const [search, setSearch] = useState("");

// const onSearchChange = (event) => {
//     setSearch(event.target.value);
//     props.onSearchChange(event.target.value);
// };


// return (
//     <>
//         <div>
//             Cari Artickel : <input onChange={onSearchChange}></input>
//             <button onClick={SearchItem}>Cari</button>
//         </div>
//         <small>Ditemukan {props.totlaPosts} data dari kata {search}</small>
//     </>
// );