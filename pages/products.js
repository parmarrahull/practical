import Link from "next/link";
import React, { useEffect } from "react";
import loaderHoc from "@/hoc/loaderHoc";

const products = (props) => {
    const { setLoading,data } = props;
    
    useEffect(() => {
      setLoading(false);
    }, []);
  return (
    <>
      <h1>
        <Link href="/categories">categories</Link>
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
                    justifyContent: "flex-end",
                    marginTop: 5,
                  }}
                >
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      margin: 0,
                      background: "#53c18e",
                      color: "white",
                    }}
                  >
                    ${product.price}
                  </p>
                </div>
                <div>
                  <h3 style={{ color: "#706f6f", fontSize: 20 }}>
                    {product.category}
                  </h3>
                  <h4 style={{ fontSize: 20 }}>{product.title} </h4>
                  <p
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default loaderHoc(products, "Loading....");

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
