class Weapon {
	static Type = { Sword : "Sword", Spear : "Spear", Dagger : "Dagger", Axe : "Axe", Bow : "Bow"}
	constructor(name, type, damage, weight) 
	{
		this.name = name;
		this.type = type;
		this.damage = damage;
		this.weight = weight;
	}
}

class ShopListing {
	constructor(weapon, price)
	{
		this.weapon = weapon;
		this.price = price;
	}
}

const shop = [
	new ShopListing(new Weapon("Great Axe", Weapon.Type.Axe, 14, 15), 225),
	new ShopListing(new Weapon("Iron Sword", Weapon.Type.Sword, 6, 8), 120),
	new ShopListing(new Weapon("Excalibur", Weapon.Type.Sword, 18, 10), 3520),
	new ShopListing(new Weapon("Arrow Thrower", Weapon.Type.Bow, 5, 5), 140),
	new ShopListing(new Weapon("The Great Tip", Weapon.Type.Spear, 16, 12), 305),
];

// Complete the next lines using javascript's array functions
// Also try to use arrow functions
const orderedByPriceAscending = [...shop].sort((a, b) => a.price - b.price)
const orderedByDamageAscending = [...shop].sort((a, b) => a.weapon.damage - b.weapon.damage)
const weaponNameAndPrice = [...shop].map(listing => {
	return {name: listing.weapon.name, price: listing.price}
	});
const onlySwords = [...shop].filter(listing => listing.weapon.type == Weapon.Type.Sword)
const bowsAndSpears = [...shop].filter(listing => (listing.weapon.type == Weapon.Type.Spear) || (listing.weapon.type == Weapon.Type.Bow))
const totalShopPrice = [...shop].reduce((total, listing) => total + listing.price, 0)
const highestDamage =  [...shop].reduce((max, listing) => max.price > listing.price ? max : listing)
// const cheapestRatioDamagePerPrice = [...shop].
const onlyUnder300 = [...shop].filter(listing => (listing.price < 300))

console.log(onlyUnder300);