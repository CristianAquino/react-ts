export const COUNTRY = ["ar", "br", "ch", "co"] as const;

export interface BasicForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  adult: boolean;
  country: string;
  province: string;
  foto: File;
  terms: boolean;
}

export type countryFilterValue = (typeof COUNTRY)[number];

export const COUNTRY_FILTER: { [key in countryFilterValue]: string } = {
  ar: "Argentina",
  br: "Brazil",
  ch: "Chile",
  co: "Colombia",
} as const;
