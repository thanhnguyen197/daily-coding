import React from 'react';

// components
import TestChildren from 'Modules/RouterTest/components/Home/components/TestChildren';

const Home = () => {

    return (
        <div>
            <h2>Home</h2>
            <TestChildren>
                {(inputList:any, push:any) => {

                    return inputList.map((item:any, index:number) => (
                        <div key={index}>
                            <input type="text" style={{color: 'red'}} value={item} />
                            <button type="button" onClick={() => push(Math.random() * 1000)} >add</button>
                        </div>
                    ));
                }}
            </TestChildren>
        </div>
    );
};

export default Home;