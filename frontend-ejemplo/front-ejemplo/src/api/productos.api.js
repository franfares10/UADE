const getProducts = async (token,setProducts) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode:'cors'
    };
    
    let response = await fetch("http://localhost:8080/api/productos/", requestOptions);
    let jsonData = await response.json();
    setProducts(jsonData);
    console.log(jsonData)
}

export default getProducts;
