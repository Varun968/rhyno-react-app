import React from 'react';
import './Rentals.css';


function Rental() {
    return (
        <RentalContainer>
            <h1>Rental Options</h1>
            <p>Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.</p>
            <p>Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</p>
            <div>
                <button aria-label="Download our rental app for Android">Download our rental app: Android</button>
                <button aria-label="Download our rental app for Apple">Download our rental app: Apple</button>
            </div>
        </RentalContainer>
    );
}

export default Rental;

