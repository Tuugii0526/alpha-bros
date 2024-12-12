import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsAddPlaceButton = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="Place">Place</TabsTrigger>
        <TabsTrigger value="Location">Location</TabsTrigger>
        <TabsTrigger value="Category">Category</TabsTrigger>
      </TabsList>
      <TabsContent value="Place">Make changes to your Place here.</TabsContent>
      <TabsContent value="Location">Change your Location here.</TabsContent>
      <TabsContent value="Category">Change your Category here.</TabsContent>
    </Tabs>
  );
};
