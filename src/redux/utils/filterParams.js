export function getAbsoluteMinMaxPrice(hotels) {
  const minPrices = hotels.map((hotel) => hotel.minRoomPrice);
  const maxPrices = hotels.map((hotel) => hotel.maxRoomPrice);
  const absoluteMinPrice = Math.min(...minPrices);
  const absoluteMaxPrice = Math.max(...maxPrices);
  return { absoluteMinPrice, absoluteMaxPrice };
}

export function getNewPrices(type, prices) {
  const {
    absoluteMinPrice,
    absoluteMaxPrice,
    currentMinPrice,
    currentMaxPrice,
    prevMinPrice,
    prevMaxPrice,
  } = prices;
  switch (type) {
    case "minPrice": {
      if (currentMinPrice === absoluteMaxPrice) {
        return {
          newMinPrice: absoluteMaxPrice,
          newMaxPrice: absoluteMaxPrice,
        };
      } else if (currentMinPrice > prevMaxPrice) {
        return {
          newMinPrice: prevMaxPrice,
          newMaxPrice: currentMinPrice,
        };
      } else {
        return {
          newMinPrice: currentMinPrice,
          newMaxPrice: prevMaxPrice,
        };
      }
    }
    case "maxPrice": {
      if (currentMaxPrice === absoluteMinPrice) {
        return {
          newMinPrice: absoluteMinPrice,
          newMaxPrice: absoluteMinPrice,
        };
      } else if (currentMaxPrice < prevMinPrice) {
        return {
          newMinPrice: currentMaxPrice,
          newMaxPrice: prevMinPrice,
        };
      } else {
        return {
          newMinPrice: prevMinPrice,
          newMaxPrice: currentMaxPrice,
        };
      }
    }
    default: {
      return {
        newMinPrice: currentMinPrice,
        newMaxPrice: currentMaxPrice,
      };
    }
  }
}
