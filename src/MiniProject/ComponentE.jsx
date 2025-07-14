function ComponentE() {
  return (
    <div className="border-container">
      <Card text1="+254" text2="Some text" />
      <Card text1="+254" text2="Some text" />
    </div>
  );
}

function Card(props) {
  const { text1, text2 } = props;

  return (
    <div className="border-container">
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}

export default ComponentE;
