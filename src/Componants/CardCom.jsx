import { useDispatch } from 'react-redux';
import { incremenCardItemCount } from '../features/cardItem/itemSlice';
import { useGetProductByIdQuery } from '../services/Product';
import Loding from './loding/Loding';


export default function CardCom() {
    const { data, error, isLoading } = useGetProductByIdQuery([]);
    const dispatch = useDispatch();

    if (isLoading) {
        return <div className='flex place-content-center items-center h-[500px]'><Loding/></div>;
    }

    if (error) {
        return <div>Error loading product</div>;
    }

    return (
        <>
            {data && (
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5  ">
                        {data.map((item, index) => (
                            <div key={index} className="p-2">
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

        </>
    );
}
