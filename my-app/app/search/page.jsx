import SearchHeader from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
}
