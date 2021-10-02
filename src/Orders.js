import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) {
      // as each user will have its own collection of orders
      // orderBy will arrange the orders (here based on date created and descending order)
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
