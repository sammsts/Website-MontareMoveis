import './style.css'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { GabaritoWorksService } from '../../../data/services/GabaritoWorksService';

export default function CarouselCircular() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        GabaritoWorksService.getProducts().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="m-2 py-3 px-3">
                <div className="bg-cover bg-center">
                    <img src={`/img/${product.image}`} alt={product.name} className="object-cover h-full w-full shadow-2" />
                </div>
            </div>
        );
    };

    return (
        <div className="card w-full">
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={2000} itemTemplate={productTemplate} />
        </div>
    )
}
