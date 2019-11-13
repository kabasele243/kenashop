import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'
import Footer from '../../components/footer/footer.component';


const HomePage = () => (
    <div className="homepage">
        <Directory />
        <Footer />
    </div>
)

export default HomePage;
