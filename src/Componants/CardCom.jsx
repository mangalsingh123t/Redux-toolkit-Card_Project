
import { useDispatch } from 'react-redux'
import { incremenCardItemCount } from '../features/cardItem/itemSlice'

export default function CardCom() {

    const dispatch = useDispatch()
    console.log(dispatch)

    return (
        <>
            <div className="countainer-fluid">
                <div className="row justify-content-evenly pt-5">
                    <div className="col-md-2">
                        <div className="card" style={{ width: "200px" }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <button className="btn btn-primary" onClick={() => dispatch(incremenCardItemCount())}>ADD TO CART</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "200px" }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <button className="btn btn-primary" onClick={() => dispatch(incremenCardItemCount())}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "200px" }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <button className="btn btn-primary" onClick={() => dispatch(incremenCardItemCount())}>ADD TO CART</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "200px" }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Product 4</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <button className="btn btn-primary" onClick={() => dispatch(incremenCardItemCount())}>ADD TO CART</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
