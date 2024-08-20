/* eslint-disable no-undef */
import { useDispatch } from 'react-redux';
import { incremenCardItemCount } from '../features/cardItem/itemSlice';
import { useGetAllProductsQuery, useGetProductsByIdQuery, useDeleteDataByIdMutation, useCreateCardDataMutation } from '../services/Product';
import Loding from './loding/Loding';
import { useRef, useState } from 'react';
import logger from './logger/Logger'
export default function CardCom() {
    const product_id = useRef();
    const [id, setId] = useState(null);
    const searchhandler = () => {
        setId(product_id.current.value);
    };

    const { data: allData, error: allError, isLoading: isLoadingAll ,refetch } = useGetAllProductsQuery();
    const { data, error, isLoading } = useGetProductsByIdQuery(id, { skip: id === null });
    const [deleteDataById, { isLoading: isDeleting, error: deleteError }] = useDeleteDataByIdMutation();
    const dispatch = useDispatch();
    const [createData] = useCreateCardDataMutation()
    const[title,setTitle]  = useState(null)
    const[description,setDescription]  = useState(null)
    const inputTitle=useRef()
    const inputDescription=useRef()

    async function deleteCard(itemId) {
        try {
            await deleteDataById(itemId).unwrap();
            // refetchAll(); // Refetch the products after deletion
            logger.info("Product with ID ${itemId} deleted successfully");   
            console.log(`Product with ID ${itemId} deleted successfully`);
        } catch (err) {
            logger.error('Failed to delete the product: ', err);
            console.error('Failed to delete the product: ', err);
        }
    }

    const handleTitleBlur = () => {
        setTitle(inputTitle.current.value);
      };
    
      const handleDescriptionBlur = () => {
        setDescription(inputDescription.current.value);
      };

    async function insertData(title,description) {
        try {
            await createData({title,description});
            console.log(`Product Data Create Duccessfully`);
              // Clear the input fields
              inputTitle.current.value = '';
              inputDescription.current.value = '';
        } catch (err) {
            console.error('Failed to Create product: ', err);
        }
    }


    function getAllCards() {
        refetch().then((result) => {
            if (result.error) {
                console.error('Refetch error:', result.error);
            } else {
                console.log('Refetch successful:', result.data);
                setId(null); // Reset the id state to ensure all data is displayed
            }
        });
    }
    
  
    if (isLoadingAll) {
        return <div className='flex place-content-center items-center h-[500px]'><Loding /></div>;
    }

    if (allError) {
        return <div>Error loading products</div>;
    }
    if (isDeleting) {
        return <div className='flex place-content-center items-center h-[500px]'><Loding /></div>;
    }

    if (deleteError) {
        return <div>Error loading products</div>;
    }

    return (
        <>
            <div className='text-center mt-3 '>
                <input type="text " className='p-1 ps-1' placeholder='Search product by id' ref={product_id} />
                <button className='bg-blue-500 p-1' onClick={searchhandler}>Search</button>
            </div>
            <div className='text-center mt-2'>
                <div><input type="text " placeholder='Add title for Card' ref={inputTitle}  onBlur={handleTitleBlur}/></div>
                <div><input type="text " placeholder='Add Description for Card' ref={inputDescription}  onBlur={handleDescriptionBlur}/></div>
                <button className='py-1 px-3 bg-blue-500 text-white' onClick={()=>insertData(title,description)}>Create CardData</button>
            </div>
            <div className='text-center mt-2'>
                <button className='py-1 px-3 bg-blue-500 text-white' onClick={getAllCards}>Get AllCards</button>
            </div>

            {isLoading && <div className='flex place-content-center items-center h-[500px]'><Loding /></div>}

            {error && <div>Error loading product</div>}

            {id === null && allData && (
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
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
                                            <button
                                                className="btn btn-primary mt-3 bg-red-500 text-white px-14 py-2 rounded"
                                                onClick={() => deleteCard(item.id)}
                                            >
                                                DELETE
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
