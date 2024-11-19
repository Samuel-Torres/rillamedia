export const getReviews = async () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;
  try {
    const response = await fetch(url);
    const res = await response?.json();
    const reviews = res?.data?.result.reviews;
    // console.log("RES: ", res);
    // console.log("REV PROMISE: ", reviews);
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};
