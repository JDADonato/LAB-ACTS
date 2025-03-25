const restaurantData = {
    "bistro-belle": {
        name: "Bistro Belle",
        image: "gourmet2.jpg",
        address: "123 Fine Dining Ave, City Center",
        phone: "(123) 456-7890",
        hours: "5PM - 11PM",
        price: "₱1,500 - ₱3,000 per person",
        description: "Bistro Belle offers a sophisticated dining experience with a menu that combines classic French cuisine with modern flavors."
    },
    "vino-lounge": {
        name: "Vino Lounge",
        image: "bar2.jpg",
        address: "88 Wine Street, Downtown",
        phone: "(456) 789-1234",
        hours: "6PM - 2AM",
        price: "₱1,200 - ₱2,500 per person",
        description: "Vino Lounge is a cozy bar featuring a selection of world-class wines and handcrafted cocktails in an intimate atmosphere."
    },
    "sea-harvest": {
        name: "Sea Harvest",
        image: "fish2.jpg",
        address: "45 Coastal Road, Seaside",
        phone: "(789) 123-4567",
        hours: "12PM - 10PM",
        price: "₱600 - ₱1,200 per person",
        description: "Freshly caught seafood cooked to perfection, Sea Harvest brings ocean flavors straight to your plate."
    },
    "garden-bites": {
        name: "Garden Bites",
        image: "veg2.jpg",
        address: "22 Greenway Blvd, Eco Park",
        phone: "(321) 654-9870",
        hours: "10AM - 8PM",
        price: "₱400 - ₱800",
        description: "Healthy, delicious, and sustainable meals made from fresh, locally sourced ingredients."
    }
};

function showRestaurant(id) {
    const data = restaurantData[id];

    document.getElementById("restaurant-name").innerText = data.name;
    document.getElementById("restaurant-image").src = data.image;
    document.getElementById("restaurant-address").innerText = `📍 ${data.address}`;
    document.getElementById("restaurant-phone").innerText = `📞 ${data.phone}`;
    document.getElementById("restaurant-hours").innerText = `🕒 ${data.hours}`;
    document.getElementById("restaurant-price").innerText = `💰 ${data.price}`;
    document.getElementById("restaurant-description").innerText = data.description;

    document.querySelector(".restaurant-cards").style.display = "none";
    document.getElementById("restaurant-details").style.display = "block";
}

function hideRestaurant() {
    document.getElementById("restaurant-details").style.display = "none";
    document.querySelector(".restaurant-cards").style.display = "flex";
}
