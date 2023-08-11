// api/newsletter GET
export const GET = async (event) => {
   const options = {
      status: 418,
      headers: {
         x: 'Gon give ir to ya'
      }
   }

   return new Response('Hello', options)
}

// api/newsletter POST
export const POST = async (event) => {
   const data = await event.request.formData()
   const email = data.get('email')

   // Suscribe the user to the newsletter
   console.log(email)

   return new Response(
      JSON.stringify({ success: true }),
      {
         headers: {
            'Content-Type': 'application/json'
         }
      }
   )
}