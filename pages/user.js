import loaderHoc from "@/hoc/loaderHoc";
import Link from "next/link";
import React, { useEffect } from "react";

const user = (props) => {
    const { setLoading,data } = props;

    useEffect(() => {
        setLoading(false);
      }, []);
  return (
    <>
      <h1>
        <Link href="/products">product</Link>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">role</th>
            <th scope="col">Email</th>
            <th scope="col">password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default loaderHoc(user,"Loading....");

export const getServerSideProps = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
