import { cookies } from 'next/headers';

export function Cart({ bikes }) {
  const bikesInCookies = cookies().get('cart');

  let bikesInCookiesParsed = [];

  if (bikesInCookies) {
    bikesInCookiesParsed = JSON.parse(bikesInCookies.value);
    console.log(bikesInCookiesParsed);
  }
}
