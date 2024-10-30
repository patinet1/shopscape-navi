import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountOverview from "@/components/account/AccountOverview";
import OrderHistory from "@/components/account/OrderHistory";
import OrderDetails from "@/components/account/OrderDetails";
import WishList from "@/components/account/WishList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccountHistory = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <h1 className="text-2xl font-bold mb-6">My Account</h1>
        
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Orders & History</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <AccountOverview />
            {selectedOrderId ? (
              <OrderDetails 
                orderId={selectedOrderId} 
                onBack={() => setSelectedOrderId(null)}
              />
            ) : (
              <OrderHistory onOrderSelect={setSelectedOrderId} />
            )}
          </TabsContent>

          <TabsContent value="wishlist">
            <WishList />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AccountHistory;