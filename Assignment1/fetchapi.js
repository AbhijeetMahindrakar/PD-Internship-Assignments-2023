// const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"

// async function getData(){
//     const response = await fetch(url)
    

//     console.log(response)
// }

// getData()





// const token = 'BQCK3szKrgcDXiz0Vzhb4wibdMD83kEXoZqmUvEKYulS0xveSARjbSQ56Xbpg6KQdm1e6m91Xtt3MnfDxORjdfkATgiTyrXkCpJlQ3fMi0S49hoAMYF2-Si-lRdcHc2qRGFTSeVHFFb8lAPFqi6vxu_XlhKXBZM_wq6QhmdCB1pLU_6iXGAtg4EfCwpIJrbLyuJPgd5W1-kFjKb9AorCAkEHdr6v74EPfFUbZN4KJlCctlfDXUCf1XXNCn_mFUKPzMvLUvgU1838z6w-wWV6HC_l';
// const url = "https://api.spotify.com/v1/artists/1SJOL9HJ08YOn92lFcYf8a";
// const headers = {
//   'Authorization': `Bearer ${token}`
// };

// async function getData() {
//   try {
//     const response = await fetch(url, { headers });
    
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();

const token = 'BQA0HcDh--sy1YQo21rYmW1NDQMy3qvVrP9z2WSim6X-1PlALRteWBaXc6bPcP6Wy-nu0JaJ-n3IFiqBMr_mhLp1_AAIcL4I6gMLbc2Im4KpWgFUpXUmotJ__pe8M2HbqKhwOIJ-k5hFKZPM7qcQIzQVaLLNWbo6NSy09QACn5CnDMl-nsLa16GnaEqw2lUxEqgM_XbLzJ-LCz2fMZ0CP-6oKgE3uE56Yld2gDuibQO-laG6Lw-1nGp6L1dkBbGvW_6Y4IJz_cNPxWhFRPdkXESt';
const url = "https://api.spotify.com/v1/artists?ids=1urtr0Wr3oFJVeTMF2aqPm%2C1BIAyVQxDuYrMqZ8H1Faja%2C6umn0ODoYa5UsGpswA99gx%2C4tejKImNVmDcORNBuZ1l14%2C1H4ZvA2yyK7wCmbvEUWvPn%2C5DxwUWyGp1uejyE80iJcn0%2C0L5f9aJIaxQXTipZ7uQYiC%2C26R3WRFIf6FbbNAQuMIjkN%2C1mBydYMVBECdDmMfE2sEUO%2C1OPqAyxsQc8mcRmoNBAnVk"
const request = new Request(

    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


// async function getData(){
//     const response = await fetch(request)  
//     const data = await response.json()
//     console.log(data)
// }

// // Promise resolved ---> DATA | ERROR 
// // Promise rejected ---> EXCEPTION -> try catch
async function getData(){
    try{
        const response = await fetch(request) 
        const data = await response.json()
        if(response.status == 200) {
            const artistList = document.getElementById('Name');

            // Loop through the data and create list items
            data.artists.forEach(artist => {
                const listItem = document.createElement('li');
                listItem.textContent = artist.name;
                artistList.appendChild(listItem);
            });

            console.log("Success : ", data)
        } else {
            console.log('Server Error : ', data.error.message)
        }
    } catch (error) {
        console.log('ERROR : ', error)
    }
    
}

getData()


// const token = 'BQB71VWB-T9_VtDIS65LrlkvEPTOYSsZ00RbkDPLevci0F1Ohj-JBWITIVIKx1TUjcplqYyIO0QZSKW1DjYMHpTC_AbDiFUhuZeBAo3q38qQ81SiHBUrYvEPLVmdAgzvsfGGtgD3SySnGTd5izDiHH3Xl9zAGto2Inwi3hFAHmyE8pcKGf-K90g3IloUpUUhuGm3HYYlhdqqNJZWNOKsfExBqjtLmsOqsPZCfhTlSza_o69ieEO8kbmtMfUYey410VxgM51hR1gX3Y4d45OLBQzB';
// const url = "https://api.spotify.com/v1/artists/2FgHPfRprDaylrSRVf1UlN"
   
// // Promise resolved ---> DATA | ERROR 
// // Promise rejected ---> EXCEPTION -> try catch
// async function getData(){
//     try{
//         const response = await fetch(url,{
//             headers:{
//                 'Authorization': `Bearer ${token}`
//             },
//         })
//         const data = await response.json()
//         if(response.status == 200) {
//             console.log("Success : ", data)
//         } else {
//             console.log('Server Error : ', data.error.message)
//         }
//     } catch (error) {
//         console.log('ERROR : ', error)
//     }
    
// }

// getData()