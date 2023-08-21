import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "react-query"
import { addProduct } from "../api/products"
import { useNavigate } from "react-router-dom"
const Add = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { mutate } = useMutation("addProduct", addProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries("products")

        }
    })
    const onSubmit = (data) => {
        mutate(data)
        navigate("/")
    }
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-1/3 mx-auto mt-10">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input {...register('name',
                            { required: "Vui lòng nhập tên sản phẩm" }
                        )} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Đỗ Thành Long" />
                    </div>
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input {...register("price", {
                            required: "Vui lòng nhập giá sản phẩm"
                        })} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desc</label>
                        <input {...register("description", {
                            required: "Vui lòng nhập mô tả sản phẩm"
                        })} type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                    <br />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                </div>
            </form>

        </>
    )
}

export default Add