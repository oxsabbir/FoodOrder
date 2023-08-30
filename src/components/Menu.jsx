import DUMMY_DATA from '../assets/DUMMY_DATA'
import './Menu.css'
import MenuList from './MenuList'
const Menu = function () {
    const data = DUMMY_DATA()

    return (
        <>  
        <section className='menuSection'>
            <div className="menu">
                <ul style={{listStyle : 'none'}}>
                {data.map(item =>
                <div key={item.id}>
                    <MenuList
                        name={item.name}
                        details={item.description}
                        price={item.price}
                        keys={item.id}
                        />
                    </div>
                )} 
           </ul>
            </div>
        </section>

        </>
    )
}

export default Menu