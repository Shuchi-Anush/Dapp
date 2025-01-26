import { useState, useEffect } from 'react';
import abi from './Json/Contract.json';
import './App.css'; // Import the new CSS file
import { ethers } from 'ethers';
import Participate from './Components/Participate.jsx';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    materialType: '',
    quantity: '',
    productName: '',
    productQuantity: '',
  });

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = '0x3d85211e3494bAC95018299b5E5147Ac80eA7867'; // Replace with your deployed contract address
      const contractABI = abi.abi; // ABI imported from the JSON

      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert('Please install MetaMask!');
          return;
        }

        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setState({ provider, signer, contract });
        setAccount(accounts[0]);

        console.log('Connected to account:', accounts[0]);
      } catch (error) {
        alert('Error connecting to MetaMask or contract: ' + error.message);
      }
    };

    connectWallet();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();

    const { companyName, materialType, quantity } = formData;

    try {
      const { contract } = state;
      if (contract) {
        const tx = await contract.addgood(companyName, materialType, ethers.utils.parseUnits(quantity, 18));
        await tx.wait();
        alert('Product added successfully!');
      }
    } catch (error) {
      alert('Error calling contract method: ' + error.message);
    }
  };

  const handleGetProductSubmit = async (e) => {
    e.preventDefault();

    const { productName, productQuantity } = formData;

    try {
      const { contract } = state;
      if (contract) {
        setLoading(true);
        const quantityInUnits = ethers.utils.parseUnits(productQuantity, 18); // Adjust unit based on contract (18 decimals assumed)
        const product = await contract.getproduct(productName, quantityInUnits);

        setProductDetails(product);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert('Error calling contract method: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">Smart Contract Interaction</h1>
        {account ? (
          <p className="connected-account">Connected Account: {account}</p>
        ) : (
          <p className="error-message">Not Connected to MetaMask</p>
        )}
        {state.contract && <Participate contract={state.contract} />}

        <div className="form-container">
          {/* Form for Adding Product */}
          <h2 className="form-title">Add Product</h2>
          <form className="form" onSubmit={handleAddProductSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="materialType">Material Type</label>
              <input
                type="text"
                id="materialType"
                name="materialType"
                value={formData.materialType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-button">Add Product</button>
          </form>

          {/* Form for Getting Product Details */}
          <h2 className="form-title">Get Product Details</h2>
          <form className="form" onSubmit={handleGetProductSubmit}>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productQuantity">Quantity</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                value={formData.productQuantity}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-button">
              {loading ? 'Loading...' : 'Get Product'}
            </button>
          </form>

          {/* Display Product Details */}
          {productDetails && (
            <div className="product-details">
              <h3>Product Details</h3>
              <p><strong>Name:</strong> {productDetails.name}</p>
              <p><strong>Amount:</strong> {ethers.utils.formatUnits(productDetails.amount, 18)}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
