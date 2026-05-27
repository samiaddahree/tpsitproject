import directus from '../../lib/directus';
import { createItem } from '@directus/sdk';

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    await directus.request(
      createItem('messaggi', {
        testo: body.testo,
        colore: body.colore
      })
    );
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
