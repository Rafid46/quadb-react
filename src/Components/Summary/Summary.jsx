import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Summary = () => {
  const [showData, setShowData] = useState();
  const details = useLoaderData();
  console.log(details);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const summary = details.find((detail) => detail.show.id === parseInt(id));
    setShowData(summary);
  }, [id, details]);
  // const { name } = useParams().show || {};
  // useEffect(() => {
  //   fetch(`Details.json/${id}`)
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((data) => {
  //       SetShowData(data);
  //     });
  // }, [id]);
  // console.log(id);
  // console.log(name);
  // console.log(details);

  // console.log(mainData);

  return (
    <div>
      <p>{showData?.show?.name}</p>
      <img src={showData?.show?.image?.medium} alt="" />
    </div>
  );
};

export default Summary;
