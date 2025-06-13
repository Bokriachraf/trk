'use client'

import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function PrivateRoute({ children }) {
  const { userInfo } = useSelector((state) => state.userSignin || {})
  const router = useRouter()
  const pathname = usePathname()

  const hasShownToast = useRef(false) // ✅ empêche le toast double

  useEffect(() => {
    if (!userInfo) {
      if (!hasShownToast.current) {
        toast.info("Merci de vous connecter ou de créer un compte pour suivre l'état de votre dossier.")
        hasShownToast.current = true // ✅ évite la répétition
      }
      router.push('/signin?redirect=/devis')
    }
  }, [userInfo, pathname, router])

  if (!userInfo) return null

  return children
}
