export async function load({data, fetch}) {
    const response = await fetch('https://sheetdb.io/api/v1/l0wrfzdpks9l3')
    const items = await response.json()
    return {
        items
    }
}





// import { json } from '@sveltejs/kit'

// export const load = () => {
//   const myData = fetch(`https://sheetdb.io/api/v1/l0wrfzdpks9l3`)
//   return json(myData)
// }




// import { error } from '@sveltejs/kit'

// try {
//   //return something here
// }
// catch({ message }) {
//   throw error(400, message)
// }