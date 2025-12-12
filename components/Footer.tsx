import { FooterClient } from "./FooterClient"
import { getContactData } from "@/lib/sheets"

export default async function Footer() {
  const contactInfo = await getContactData()

  return <FooterClient
    address="Leubnitzer Str. 28, 01069 Dresden"
    email="info@yeti-dresden.org"
    contactInfo={contactInfo}
  />
}

