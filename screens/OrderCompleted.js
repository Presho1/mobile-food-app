import { Text, SafeAreaView, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { firestore, collection, query, orderBy, limit, onSnapshot } from '../firebase';
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
              title: "Bologna",
              description: "With butter lettuce, tomato and sauce bechamel",
              price: "$13.50",
              image:
                "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cart.selectedItems
      );
    
      const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const q = query(
            collection(firestore, 'orders'),
            orderBy('createdAt', 'desc'),
            limit(1)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
                snapshot.docs.forEach((doc) => {
                    setLastOrder(doc.data());
                });
            }
        });

        return unsubscribe;
    }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View 
        style={{
            margin: 15,
            alignItems: 'center',
            height: '100%',
        }}>
            <LottieView style={{height: 100, width:100, alignSelf:'center', marginBottom: 30}}
            source={require('../assets/animations/greencheck.json')}
            autoPlay
            speed={0.5}
            loop={true}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Your order at {restaurantName} has been placed for {totalUSD}
            </Text>
            <ScrollView>
                <MenuItems 
                    foods={lastOrder.items} 
                    hideCheckbox={true} 
                    marginLeft={10}
                />
                <LottieView 
                style={{height: 200, width:200, alignSelf:'center',}}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                speed={0.5}
                />
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}
