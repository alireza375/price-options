import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis} from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(response => response.json())
    //         .then(data => setPhones(data.data))
    // }, [])
    
    // If i doing this with axios what will be the code?
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            // setLoading(false);
        })
    }, [])
    
    return (
        <div>
            <h2 className='text-5xl'>Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;