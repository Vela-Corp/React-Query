import { Link } from "react-router-dom"
import { delteOneProduct, getProducts } from "../api/products"
import { useMutation, useQuery } from "react-query"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
    // const queryClient = useQueryClient();
    const [searchValue, setSearchValue] = useState("")
    const { isLoading, data, refetch } = useQuery(["products", searchValue], () => getProducts(searchValue), {
    })
    const { mutate } = useMutation("removeProduct", delteOneProduct, {
        onSuccess: () => {
            toast.success("Xóa thành công")
            refetch()
        }
    })
    const handlDeleteProduct = (id) => {
        mutate(id)
    }
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col py-5">
                <div className="w-full flex items-center justify-between px-10">
                    <input value={searchValue} className=" border-2 w-64 h-9 rounded-md border-blue-500 outline-none pl-2" type="text" name="" id="" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                    <Link className=" " to={"/add"}>     <button className="bg-green-500 text-white px-4 py-2 ">Add</button></Link></div>
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full w-full " >
                                <thead className="bg-gray-200 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Description
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="w-full" >
                                    {isLoading && (
                                        <div role="status" className="min-h-screen w-full  absolute flex justify-center items-center">
                                            <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>

                                    )
                                    }
                                    {
                                        data && data.data.length ? data.data?.map((item, index) =>
                                            <>
                                                <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.price}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.description}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Link to={`/update/${item.id}`}>   <button className="bg-green-500 text-white px-4 py-2 mx-1">Update</button></Link>
                                                        <button onClick={() => handlDeleteProduct(item.id)} className="bg-red-500 text-white px-4 py-2 mx-1" >Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                            : null
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            {/* <nav aria-label="Page navigation example" className="flex justify-center">
                <ul className="inline-flex -space-x-px text-sm ">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}

export default Products