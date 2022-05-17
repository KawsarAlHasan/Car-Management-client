import useInventories from '../hooks/useInventories';
import Loading from '../Loading/Loading';
import ManageInventory from './ManageInventory/ManageInventory';

const ManageInventories = (props) => {

    const [inventorys, isLoading] = useInventories();

    return (
        <div>
            <h1 className='text-center py-4'>Manage <span className='text-danger'>Inventories</span></h1>

            <div className="inventorys-container container">
                {isLoading ? <Loading></Loading> :
                    inventorys.map(inventory => <ManageInventory
                        key={inventory._id}
                        inventory={inventory}
                    ></ManageInventory>
                    )}
            </div>
            <div className='container text-center my-2'>
                <a href='/addItem' className='text-primary text-decoration-none'>Add a new Item!</a>
            </div>
        </div>
    );
};

export default ManageInventories;