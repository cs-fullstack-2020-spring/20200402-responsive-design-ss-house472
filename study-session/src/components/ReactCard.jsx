import React, { Component } from 'react';

class ReactCards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>

                <h1>Bootstrap Cards</h1>
                {/* parent container for react cards */}
                <div className="row row-cols-1 row-cols-md-3">
                    {/* six identical react cards */}
                    <div className="col mb-4">

                        <div className="card .h-100">

                            <img src="/img/tech01.jpeg" className="card-img-top" alt="stock tech" />

                            <div className="card-body">

                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card .h-100">
                            <img src="/img/tech02.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card .h-100">
                            <img src="/img/tech03.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card .h-100">
                            <img src="/img/tech01.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card .h-100">
                            <img src="/img/tech03.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card .h-100">
                            <img src="/img/tech01.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ReactCards;