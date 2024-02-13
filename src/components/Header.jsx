import Logo from './Logo.jsx';
import Title from './Title.jsx';

const Header = () => {
  return (
    // <header class="d-flex py-3">
    //   <nav class="d-flex justify-content-center py-3">
    //     <ul class="nav nav-pills">
    //       <li class="nav-item">
    //         <a
    //           href="https://1krs.github.io/Investment_Calculator"
    //           class="nav-link active"
    //           aria-current="page"
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a
    //           href="https://1krs.github.io/Investment_Calculator"
    //           class="nav-link"
    //         >
    //           Features
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a
    //           href="https://1krs.github.io/Investment_Calculator"
    //           class="nav-link"
    //         >
    //           Pricing
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a
    //           href="https://1krs.github.io/Investment_Calculator"
    //           class="nav-link"
    //         >
    //           FAQs
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a
    //           href="https://1krs.github.io/Investment_Calculator"
    //           class="nav-link"
    //         >
    //           About
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <header id='header'>
      <Logo />
      <Title />
    </header>
  );
};

export default Header;
