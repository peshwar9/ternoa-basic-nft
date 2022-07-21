import  ternoa  from "ternoa-js";

async function main() {
        // Generate keyring
        const account = await ternoa.generateSeed()
        const keyring = await ternoa.getKeyringFromSeed(account.seed)
        const address = keyring.address
        console.log("Your fresh public address is: ", address)

        try {
            console.log("Your keyring is: ", keyring)
            await ternoa.initializeApi()
            await ternoa.createNft("My first NFT", 10, 5, false, keyring, ternoa.WaitUntil.BlockFinalization)
        } catch (e) {
            console.log("Error in NFT creation ", e)
        }
}
// Run program with node --experimental-specifier-resolution=node <name-of-program.js>
main()