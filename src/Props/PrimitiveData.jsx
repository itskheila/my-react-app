function ParentComponent() {
  const name = "Dress1";
  const img = "https://m.media-amazon.com/images/I/716H7P4ga3L._AC_SY741_.jpg";
  const price = 2000;
  const onStock = true;

  // <Component a={23} b={34}  />

  return (
    <div>
      <ChildComponent
        cats={"Cats"}
        name={name}
        img={img}
        price={price}
        onStock={onStock}
      />
    </div>
  );
}

// img,name,price
function ChildComponent(props) {
  //   const {} = props;
  console.log(props);
  return (
    <div>
      <h3>Child component</h3>
    </div>
  );
}

export default ParentComponent;
