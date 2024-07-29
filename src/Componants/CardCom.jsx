import { useDispatch } from 'react-redux';
import { incremenCardItemCount } from '../features/cardItem/itemSlice';
import { useGetAllProductsQuery, useGetProductsByIdQuery } from '../services/Product';
import Loding from './loding/Loding';
import { useRef, useState } from 'react';

export default function CardCom() {
    const product_id = useRef();
    const [id, setId] = useState(null);

    const searchhandler = () => {
        setId(product_id.current.value);
    };

    const { data: allData, error: allError, isLoading: isLoadingAll } = useGetAllProductsQuery();
    const { data, error, isLoading } = useGetProductsByIdQuery(id, { skip: id === null });

    const dispatch = useDispatch();

    if (isLoadingAll) {
        return <div className='flex place-content-center items-center h-[500px]'><Loding /></div>;
    }

    if (allError) {
        return <div>Error loading products</div>;
    }

    return (
        <>
            <div className='text-center mt-3 '>
                <input type="text " className='p-1 ps-1' placeholder='Search product by id' ref={product_id} />
                <button className='bg-blue-500 p-1' onClick={searchhandler}>Search</button>
            </div>

            {isLoading && <div className='flex place-content-center items-center h-[500px]'><Loding /></div>}

            {error && <div>Error loading product</div>}

            {id === null && allData && (
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                        {allData.map((item) => (
                            <div key={item.id} className="p-2">
                                <div className="card bg-white shadow-lg rounded-lg h-full">
                                    <div className="p-4">
                                        <h5 className="text-lg font-bold text-center">{item.title.slice(0, 10)}</h5>
                                        <p className="text-sm text-gray-600">{item.description.slice(0, 150)}</p>
                                        <div className='text-center'>
                                            <button
                                                className="btn btn-primary mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                                                onClick={() => dispatch(incremenCardItemCount())}
                                            >
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {id !== null && data && (
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                        <div className="p-2">
                            <div className="card bg-white shadow-lg rounded-lg h-full">
                                <div className="p-4">
                                    <h5 className="text-lg font-bold text-center">{data.title.slice(0, 10)}</h5>
                                    <p className="text-sm text-gray-600">{data.description.slice(0, 150)}</p>
                                    <div className='text-center'>
                                        <button
                                            className="btn btn-primary mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                                            onClick={() => dispatch(incremenCardItemCount())}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
