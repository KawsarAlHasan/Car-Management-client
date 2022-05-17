import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Login/Signup/Signup';
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/inventory/:invetoryId' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
