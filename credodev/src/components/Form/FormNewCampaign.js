import React from 'react';
import useForm from "./useForm";

const FormNewCampaign = () => {

    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Make change happen! Create your campaign!</h1>
                <pre>  </pre>
                <div className="form-inputs">
                    <label htmlFor="title"
                           className="form-label">
                        Title of Campaign
                    </label>
                    <input
                        id='title'
                        type = 'text'
                        name = 'title'
                        className="form-input"
                        placeholder='Enter a title for your campaign'
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='location'
                           className='form-label'>
                        Location
                    </label>
                    &nbsp;
                    &nbsp;
                    <input
                        id='location'
                        type='location'
                        name= 'location'
                        className='form-input'
                        placeholder='Enter campaign location'
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Description'
                           className='form-label'>
                        Description
                    </label>
                    <textarea
                        name="description"
                        rows="10"
                        cols="30"
                        placeholder = "Describe your campaign"
                        id = 'description'
                        type = 'text'
                        className='form-input'>
                    </textarea>
                </div>
                <pre> </pre>
                <button className='form-input-btn'
                        type = 'submit'>
                    Start Campaign
                </button>
            </form>
        </div>
    );
};

export default FormNewCampaign;