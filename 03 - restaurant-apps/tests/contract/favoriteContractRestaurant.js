import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const itActsAsFavoriteRestaurantModel = (FavoriteRestaurantIdb) => {
  it("should return the restaurant that has been added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toEqual({ id: 1 });
    expect(await FavoriteRestaurantIdb.getRestaurant(2)).toEqual({ id: 2 });
    expect(await FavoriteRestaurantIdb.getRestaurant(3)).toEqual(undefined);
  });

  it("should refuse a restaurant from being added if it does not have the correct property", async () => {
    FavoriteRestaurantIdb.putRestaurant({ aProperty: "property" });

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("can return all of the restaurants that have been added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("should remove favorite restaurant", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });
    FavoriteRestaurantIdb.putRestaurant({ id: 3 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it("should handle request to remove a restaurant even though the restaurant has not been added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });
    FavoriteRestaurantIdb.putRestaurant({ id: 3 });

    await FavoriteRestaurantIdb.deleteRestaurant(4);

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
