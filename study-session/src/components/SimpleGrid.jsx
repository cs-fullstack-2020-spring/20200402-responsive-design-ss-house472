import React, { Component } from 'react';

class SimpleGrid extends Component {

    render() {
        return (
            <div>

                <h1>Simple Grid</h1>
                {/* parent container for grid items */}
                <div className="simpleGrid">
                    {/* six identical grid items */}
                    <div className="girdItem1">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                    <div className="girdItem2">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                    <div className="girdItem3">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                    <div className="girdItem4">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                    <div className="girdItem5">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                    <div className="girdItem6">
                        <img src="/img/tech01.jpeg" alt="stock" />
                        <div>
                            <h5>Item Title</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in repellat veritatis illum, laborum consequatur ipsam optio iste molestias eligendi dolore. Aut impedit odit numquam. Voluptate accusantium fugit tempora fugiat.

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SimpleGrid