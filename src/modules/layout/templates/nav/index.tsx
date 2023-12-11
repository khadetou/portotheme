"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <header className="bg-white text-[#333]">
      <div className="header-top bg-[#0088dd] text-[1.1rem] tracking-[-0.027em] capitalize text-white border-solid border-b border-[rgba(238,238,238,0.2)] ">
        <div className="containers flex items-center">
          <div className="header-left flex items-center maxmdlg:mr-8 maxsmall:relative maxsmall:overflow-hidden ">
            <p className="welcome-msg m-0 text-size-inherit font-inherit tracking-[-0.022em] leading-normal whitespace-nowrap py-[14px] px-0 uppercase maxsmall:animate-showMsgFirstAnim">
              Welcome to Wolmart Store message or remove.
            </p>
          </div>
          <div className="header-right pr-[0.2rem] ml-auto flex items-center">
            <div className="dropdown ml-0 relative">
              <a
                href="#"
                className="leading-[1.1] py-[11px] px-0 flex items-center hover:text-white"
              >
                USD
              </a>
            </div>
            <div className="dropdown ml-8 relative">
              <a
                href="#"
                className="leading-[1.1] py-[11px] px-0 flex items-center hover:text-white"
              >
                ENG
              </a>
            </div>
            <span className="divider opacity-20 h-[1.3rem] w-[1px] bg-[#ccc] ml-8 maxmdlg:!hidden"></span>
            <a
              href="#"
              className="text-inherit ml-8 maxmdlg:!hidden transition-all duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-inherit ml-8 maxmdlg:!hidden transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-inherit ml-8 maxmdlg:!hidden transition-all duration-300"
            >
              My Account
            </a>
            <a
              href="#"
              className="text-inherit ml-8 maxmdlg:!hidden transition-all duration-300"
            >
              Sign in
            </a>
            <span className="delimiter maxmdlg:!hidden mx-[0.3rem] my-0 text-[#aaa]">
              /
            </span>
            <a
              href="#"
              className="text-inherit ml-0 maxmdlg:!hidden transition-all duration-300"
            >
              Register
            </a>
          </div>
        </div>
      </div>
      <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
        <div className="flex-1 basis-0 h-full flex items-center">
          <div className="block small:hidden">
            <Hamburger setOpen={toggle} />
          </div>
          <div className="hidden small:block h-full">
            <SideMenu searchModalOpen={searchModalOpen} />
          </div>
        </div>

        <div className="flex items-center h-full">
          <Link
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
          >
            Medusa Store
          </Link>
        </div>

        <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
          <div className="hidden small:flex items-center gap-x-6 h-full">
            {process.env.FEATURE_SEARCH_ENABLED && (
              <DesktopSearchModal
                state={searchModalState}
                close={searchModalClose}
                open={searchModalOpen}
              />
            )}
            <Link className="hover:text-ui-fg-base" href="/account">
              Account
            </Link>
          </div>
          <CartDropdown />
        </div>
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Nav
