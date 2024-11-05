// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div>
                <h3>Diabetes Risk Prediction</h3>
                <ul>
                        <li><strong>Objective:</strong> Predict diabetes risk by analyzing retinal images, aiding in early detection of diabetes in high-risk individuals.</li>
                        <li><strong>Methodology:</strong> Utilize image processing and machine learning techniques to detect key indicators like microaneurysms, hemorrhages, and other vascular changes in retinal images.</li>
                        <li><strong>Benefits:</strong> Supports preventive healthcare by identifying potential diabetes cases early, allowing for timely medical intervention.</li>
                        <li><strong>Target Audience:</strong> High-risk groups, such as individuals with a family history of diabetes or pre-existing health concerns, who benefit from early screening.</li>
                        <li><strong>Outcome:</strong> A tool that offers a non-invasive, accessible approach to assess diabetes risk based on retinal image analysis.</li>
                </ul>
            </div>
            <div>
                <h3>Online Grocery Store</h3>
                <ul>
                        <li><strong>User-Friendly Layout:</strong> The online grocery store has a clean and organized design with easy navigation across the home, shop, cart, and checkout pages.</li>
                        <li><strong>Product Display:</strong> Users can view available products in a responsive grid, with images, descriptions, and pricing for each item.</li>
                        <li><strong>Cart Management:</strong> Shoppers can add items to their cart, view them in a centered cart display, and remove items as needed.</li>
                        <li><strong>Checkout Functionality:</strong> At checkout, users see a detailed summary of their order, including itemized costs and the total price.</li>
                        <li><strong>QR Code for Payment:</strong> After clicking the “Pay” button, a QR code is shown to facilitate easy payment processing.</li>
                        <li><strong>Interactive Experience:</strong> JavaScript enhances the experience by dynamically updating pages and providing real-time feedback for cart and checkout actions.</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects; 