import { generateSeed, getKeyringFromSeed } from "ternoa-js";
export default (async() => {
    const account = await generateSeed()
    const keyring = await getKeyringFromSeed(account.seed)
    const address = keyring.address
    console.log("Your fresh public address is: ", address)

})().catch((e) => {
    console.log("Errir occurred: ",e)
})
