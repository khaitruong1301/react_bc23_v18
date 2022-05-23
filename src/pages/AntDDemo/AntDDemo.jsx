import React from 'react'
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function AntDDemo(props) {
    return (
        <div style={{ minHeight: 500 }} className="container">
            <Carousel afterChange={onChange} dotPosition="right" autoplay={false} dontAnimate={true}>
                <div>
                    {/* <h3 style={contentStyle}>1</h3> */}
                    <img style={contentStyle} src={'https://picsum.photos/id/15/1280/160'} alt="..." />
                </div>
                <div>
                    <img style={contentStyle} src={'https://picsum.photos/id/16/1280/160'} alt="..." />

                </div>
                <div>
                    <img style={contentStyle} src={'https://picsum.photos/id/17/1280/160'} alt="..." />

                </div>
                <div>
                    <img style={contentStyle} src={'https://picsum.photos/id/18/1280/160'} alt="..." />

                </div>
            </Carousel>

            {/* <button className='btn btn-success' onClick={() => {

            }}>next</button> */}

        </div>
    )
}

