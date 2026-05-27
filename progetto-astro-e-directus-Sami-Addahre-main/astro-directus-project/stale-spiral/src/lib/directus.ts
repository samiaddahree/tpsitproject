import { createDirectus, rest } from '@directus/sdk';

// Il link alla tua istanza Directus (Porta 8055)
const directus = createDirectus('https://curly-space-waddle-g47x9qpw6564hv4xx-8055.app.github.dev').with(rest());

export default directus;
