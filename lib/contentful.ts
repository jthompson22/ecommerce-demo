
const contentfulKey = process.env.CONTENTFUL_API
const contentfulPreviewKey = process.env.CONTENTFUL_PREVIEW
import { unstable_noStore } from 'next/cache'



// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
export async function getHeroContent(isPreview: boolean) {
  const contentUrl = isPreview
    ? `https://preview.contentful.com/spaces/sm28rkz980un/environments/master/entries/nUea4fv71JppXrLPmbXSs?access_token=${contentfulPreviewKey}`
    : `https://cdn.contentful.com/spaces/sm28rkz980un/environments/master/entries/nUea4fv71JppXrLPmbXSs?access_token=${contentfulKey}`

  let data = await fetch(contentUrl, { next: { revalidate: 300 } })
    .then(response => response.json())
    .catch((err: any) => console.log(err))
  return data.fields.copy
}

