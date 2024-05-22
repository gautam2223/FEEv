import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';


function Auth() {
   

    return (

        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'}`}>
                       
                        <span className={`${open && 'rotate-180'}`}>
                            <Icon name="downDir" size={16} />
                        </span>
                    </Menu.Button>
                    <Menu.Items className="w-48 rounded absolute top-full right-0 bg-active translate-y-2 z-10">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/account-settings"
                                >
                                    Account
                                    <Icon size={16} name="external" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/profile"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/logout"
                                >
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>

    )
}

export default Auth;