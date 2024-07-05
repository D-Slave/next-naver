'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Links() {
    const pathname = usePathname()
    return (
        <nav>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/board' ? 'active' : ''}`}
              href="/board"
            >
              Board
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/user' ? 'active' : ''}`}
              href="/user/login"
            >
              user
            </Link>
          </li>
        </ul>
      </nav>
    )
}
