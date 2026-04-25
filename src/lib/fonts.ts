import { Bricolage_Grotesque, DM_Sans, Rethink_Sans, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
})

export const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rethink',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jakarta',
})
