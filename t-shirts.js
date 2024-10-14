const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

// Retrieving the element from html

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  
  const [tshirtData, setTshirtData] = React.useState(tshirts);

    const handleBuy = (index, quantity) => {
      setTshirtData(prevState => {
        const newState = [...prevState];
        newState[index].stock -= quantity;
        return newState;
      });
    };

    return (
      <div style={{
        fontFamily: 'Arial, sans-serif',
      }}><h1 style={{
        marginLeft: '70px',
      }}>T-shirts</h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 auto',
          justifyContent: 'center',
        }}>
          {tshirtData.map((tshirt, index) => (
            <div key={index} className="tshirt" style={{
              padding: '10px',
              margin: '10px',
            }}><img src={`./images/${tshirt.image}`} alt={tshirt.title} style={{
                width: '340px',
                
                }}/>
              <h2>{tshirt.title}</h2>
              <p style={{
                fontWeight: 'bold',
                fontStyle: 'italic', 
              }}>${tshirt.price}</p>
              <p style={{
                color: tshirt.stock > 0 ? 'black' : 'red',
              }}>
                {tshirt.stock > 0 ? `${tshirt.stock} left!` : 'Out of Stock'}
              </p>
              {tshirt.stock > 0 && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  gap: '10px',
                }}>
                  <select id={`quantity-${index}`} style={{
                    padding: '5px 10px',
                    width: '120px',
                    
                  }}>
                    {[1,2,3,4].map((quantity, i) => (
                      <option key={i} value={quantity}>{quantity}</option>
                ))  }
                  </select>
                  <button
                    onClick={() =>
                      handleBuy(index, parseInt(document.getElementById(`quantity-${index}`).value))
                    }
                  style={{
                    padding: '5px 12px',
                    backgroundColor: 'grey',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '3px',
                  }}>
                    Buy
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );

};

root.render(<App />);