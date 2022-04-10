//return player's current money
export function myMoney(ns) {
	var money = ns.getServerMoneyAvailable("home");
	return money;
}
//check if player own an sf of certain lvl
export function ownSF(ns,n,lvl) {
	var name = n;
	var level = lvl;
	var ownedSF = ns.getOwnedSourceFiles();
	for (let i of ownedSF) {
		if (i.n == name && i.lvl >= level ) {
			return true;
		}
	}
	return false;
}







