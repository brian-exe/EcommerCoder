import {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer(){
    const [currentItem, setCurrentItem] = useState({});

    useEffect(()=> {
        const item = {
                id:1,
                title:"Notebook Asus",
                price:"170.000",
                stock:"5",
                desc:`                    Eficiencia a tu alcance
                Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.

                Potente disco sólido
                El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.

                Un procesador exclusivo para los gráficos
                Su placa de video Intel Iris X Graphics convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.`,
                img:"https://media.istockphoto.com/photos/asus-zenbook-duo-14-ux482-picture-id1317708698"
            };
        async function fetchItem(){
            const getItem = () =>new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(item)
                },5000);
            });
            setCurrentItem(await getItem());
        }
        fetchItem();
    },[]);
    
    return(
        <ItemDetail
        key={currentItem.id}
        id={currentItem.id}
        title={currentItem.title} 
        price={currentItem.price} 
        stock={currentItem.stock}
        img={currentItem.img}
        desc={currentItem.desc}
        />
    );
}