import React from 'react';
import Header from '../../Share/Header';


const Home = () => {
    return (
        <div className='bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full'>
            {/* Header Call here */}
            <Header />
        </div>
    );
};

export default Home;