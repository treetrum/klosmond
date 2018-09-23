import React from 'react';
import ContentPage from '../templates/ContentPage';

export default () => {
    return (
        <ContentPage title="Contact">
            <form>
                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Jane" />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="enail"
                        placeholder="jane@example.com"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="message">Name</label>
                    <textarea name="message" id="" cols="30" rows="10" />
                </div>
                <div className="form-input">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </ContentPage>
    );
};
