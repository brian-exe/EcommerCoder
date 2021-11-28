import {createContext, useContext} from 'react'

 const MockDataContext = createContext();

 export const useMockDataContext = ()=> useContext(MockDataContext)

 export default function MockDataProvider({children}){
    const arrayItems = [
        {
            id:1,
            title:"Notebook Asus",
            price:"170.000",
            stock:"5",
            desc:`Eficiencia a tu alcance
            Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.

            Potente disco sólido
            El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.

            Un procesador exclusivo para los gráficos
            Su placa de video Intel Iris X Graphics convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.`,
            img:"https://media.istockphoto.com/photos/asus-zenbook-duo-14-ux482-picture-id1317708698"
        },
        {
            id:3,
            title:"Mouse Gamer",
            price:"1239,00",
            stock:"4",
            desc:"",
            img:"https://image.shutterstock.com/image-photo/blue-light-computer-gaming-mouse-600w-723052858.jpg"
        },
        {
            id:2,
            title:"Monitor",
            price:"15.000",
            stock:"3",
            desc:"",
            img:"https://image.shutterstock.com/image-vector/realistic-computer-monitor-screen-isolated-600w-1363396547.jpg"
        },
    ];
    async function fetchItems(){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(arrayItems)
            },5000);
        });
    }

    async function fetchItem(id){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(arrayItems.find(item => item.id === Number(id)))
            },5000);
        });
    }

     return (
        <MockDataContext.Provider value={{fetchItems, fetchItem}}>
            {children}
        </MockDataContext.Provider>
     );
 };