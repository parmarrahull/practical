import loaderHoc from "@/hoc/loaderHoc";
import Link from "next/link";
import React, { useEffect } from "react";

const categories = (props) => {
  const { setLoading, data } = props;
  useEffect(() => {
    setLoading(false);
  }, []);
  
  return (
    <>
      <h1>
        <Link href="/user">user</Link>
      </h1>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", margin: 10 }}>
        {data.map((product) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fafafa",
                  flex: "0 0 24%",
                  padding: 30,
                }}
                id={product.id}
                className="card"
              >
                <img
                  src={product.image}
                  style={{
                    maxWidth: 250,
                    maxHeight: 200,
                    margin: 20,
                    padding: 20,
                  }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <h4>{product.name}</h4>
                </div>
                <div>
                  <h3 style={{ color: "#706f6f", fontSize: 20 }}>
                    {product.name}
                  </h3>
                  <h4 style={{ fontSize: 20 }}>{product.updatedAt} </h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default loaderHoc(categories, "Loading....");

export const getServerSideProps = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
