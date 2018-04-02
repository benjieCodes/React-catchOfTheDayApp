import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="store-selector">
                    {/* This is a store component */}
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit"> Visit Store →</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;