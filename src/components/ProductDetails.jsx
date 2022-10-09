import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import useFetch from './useFetch';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const { data, error } = useFetch(`https://api.itbook.store/1.0/books/${id}`);
    console.log(data);
    return (
        <div className='py-5 container'>
            {data &&
                <div className="d-flex product-content">
                    <div className="col-sm-5 d-flex flex-column justify-content-center">
                        <img src={data.image} alt="book" className='w-75 h-75' />
                    </div>
                    <div className="col-sm-7 d-flex flex-column justify-content-center align-items-center">
                        <h4 className='mt-3 text-center'>{data.title}</h4>
                        <span className='py-3'>{data.subtitle}</span>
                        <table className="table table-danger table-striped-columns table-hover">
                            <tbody>
                                <tr className='col-6'>
                                    <td>Price:</td>
                                    <td>{data.price}</td>
                                </tr>
                                <tr className='col-6'>
                                    <td>Rating:</td>
                                    <td>{data.rating}</td>
                                </tr>
                                <tr>
                                    <td>Author:</td>
                                    <td>{data.authors}</td>
                                </tr>
                                <tr>
                                    <td>Publisher:</td>
                                    <td>{data.publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year:</td>
                                    <td>{data.year}</td>
                                </tr>
                                <tr>
                                    <td>Language:</td>
                                    <td>{data.language}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='mt-3'>{data.desc}</p>
{
    // foo.bar == foo["bar"]
    data.pdf &&
    <div className="pdf pb-4">
    <FontAwesomeIcon icon={faFilePdf} style={{"fontSize":"30px","color":"red"}} className="me-3" /><span>You can get Free pdf from here:</span>
    <a href={data.pdf["Free eBook"]} target="blank" className='ms-2'>{data.pdf["Free eBook"]}</a>
    </div>
}
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <div class="btn-group" role="group" aria-label="Default button group">
                                <button type="button" class="btn btn-success"><FontAwesomeIcon className='me-2' icon={faTwitter} />Twitter</button>
                                <button type="button" class="btn btn-primary"><FontAwesomeIcon className='me-2' icon={faFacebookF} />Facebook</button>
                                <button type="button" class="btn btn-danger"><FontAwesomeIcon className='me-2' icon={faPinterest} />Pinterest</button>
                                <button type="button" class="btn btn-info"><FontAwesomeIcon className='me-2' icon={faInstagram} />Instagram</button>
                                <button type="button" class="btn btn-secondary"><FontAwesomeIcon className='me-2' icon={faLinkedin} />Linkedin</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetails