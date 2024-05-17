import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link, Stack } from "expo-router";
import { icons, images } from "../../constants";

import { MaterialIcons as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { useState } from "react";

const items = [
  { name: "Cars", id: 1 },
  { name: "Vans", id: 2 },
  { name: "SUVs", id: 3 },
  { name: "Motorbikes", id: 4 },
  { name: "Trucks", id: 5 },
];
// import useAppwrite from "../../lib/useAppwrite";
// import { getAllPosts, getLatestPosts } from "../../lib/appwrite";

const Home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log("Selected:", selectedItems);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-black">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerRight: () => (
            <View className="flex flex-row items-center justify-center space-x-4">
              <Image
                source={icons.notificationIcon}
                resizeMode="contain"
                className=""
              />
              <Link
                href={"/polls/new"}
                className=" rounded-full flex items-center justify-center"
              >
                <View className="border border-white h-10 w-10 rounded-full flex items-center justify-center">
                  <Image source={icons.profileIcon} resizeMode="contain" />
                </View>
              </Link>
            </View>
          ),
          headerLeft: () => (
            // <Link
            //   href={"/profile"}
            //   className="flex items-center justify-center"
            // >
            <Image source={images.BackLogo} resizeMode="contain" className="" />
            // </Link>
          ),
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      {/* <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */}
      <View className=" h-full px-4">
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          onSelectedItemsChange={setSelectedItems}
          selectText="Categories"
          selectedItems={selectedItems}
          modalAnimationType="slide"
          styles={{
            container: styles.container,
            selectedItem: styles.listContainer,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "90%",
    borderRadius: 5,
    position: "absolute",
    top: 120,
    left: 0,
  },
  listContainer: {
    backgroundColor: "#fff",
    borderStyle: "dashed",
  },
});
export default Home;
