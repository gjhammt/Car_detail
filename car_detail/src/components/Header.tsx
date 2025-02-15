import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import  MobileMenu  from './MobileMenu';
import { NavItem, navItems } from '../types/navigation'; // Updated import


// export interface NavItem {
//     id: string;
//     label: string;
//   }
  
//   export const navItems: NavItem[] = [
//     { id: 'home', label: 'Home' },
//     { id: 'services', label: 'Services' },
//     { id: 'pricing', label: 'Pricing' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'testimonials', label: 'Testimonials' },
//     { id: 'contact', label: 'Contact' },
//   ]


export  const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white shadow-sm z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-primary"
        >
          AutoShine
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`} 
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 hover:text-primary"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          <FiMenu />
        </button>
      </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.nav>
    );
  };


// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed w-full bg-white shadow-sm z-50"
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           className="text-2xl font-bold text-primary"
//         >
//           AutoShine
//         </motion.div>

//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               whileHover={{ scale: 1.05 }}
//               className="text-gray-600 hover:text-primary"
//             >
//               {item}
//             </motion.a>
//           ))}
//         </div>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl"
//         >
//           <FiMenu />
//         </button>
//       </div>

//       <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
//     </motion.nav>
//   );
// }


