import React from 'react';
import './Product3.css';
import rhynoImage from 'src/assets/rhyno.png';

const Product3 = () => {
    return (
        <div className="card">
            <h2>Rhyno SE03 Max</h2>
            <img src={rhynoImage} />
            <p>Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Specification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Battery</td>
                        <td>2.7Kwh</td>
                    </tr>
                    <tr>
                        <td>Battery features</td>
                        <td>LFP with 1500 cycles<br/>
                            Active Balancing<br/>
                            Waterproof (IP67)
                        </td>
                    </tr>
                    <tr>
                        <td>Motor</td>
                        <td>1500 W</td>
                    </tr>
                    <tr>
                        <td>Battery Warranty</td>
                        <td>3 Years</td>
                    </tr>
                    <tr>
                        <td>Charging time</td>
                        <td>4 hours(12 A)</td>
                    </tr>
                    <tr>
                        <td>Max Range(@30km/h)</td>
                        <td>150 km</td>
                    </tr>
                    <tr>
                        <td>Max speed</td>
                        <td>55 km/h</td>
                    </tr>
                    <tr>
                        <td>Max range(@fullspeed)</td>
                        <td>90 km</td>
                    </tr>
                    <tr>
                        <td>Max range(@45km/h)</td>
                        <td>110 km</td>
                    </tr>
                    <tr>
                        <td>Warranty on Electronics</td>
                        <td>1 year</td>
                    </tr>
                    <tr>
                        <td>Other key benefits</td>
                        <td>Fire-safe battery<br/>
                            Range prediction<br/>
                            Comfortable ride and safe
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Product3;
