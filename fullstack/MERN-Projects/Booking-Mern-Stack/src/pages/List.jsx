
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const List = () => {
  return (
    <div>
      <Navbar/>
      
      <Header type = "list"/>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">

          </div>
          <div className="listResult">

          </div>
        </div>
      </div>

    </div>
  )
}

export default List