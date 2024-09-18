import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a href="#" className="flex items-center font-bold focus:font-bold focus:text-yellow-600 hover:text-yellow-600">
          Nature
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold focus:font-bold focus:text-yellow-600 hover:text-yellow-600">
          Desert
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold focus:font-bold focus:text-yellow-600 hover:text-yellow-600">
          Hills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold focus:font-bold focus:text-yellow-600 hover:text-yellow-600">
          Ocean
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-fit max-w-full bg-gray-100 rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between mt-4 pl-4 text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5  font-bold"
          >
            Card Gallery
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            on
          >
            <Link to='/Explore'>Explore</Link>
          </Button>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Explored</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}