import React from 'reactn';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.setGlobal({user: null});
    }

    render() {
        return(
            <div className="page-content mt-30">
                <div className="text-center">
                    Successfully logged out.
                </div>
            </div>
        );
    }
}

export default LogoutPage;
