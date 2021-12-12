import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="flex items-center bg-nord-1 text-nord-5 py-3 px-2">
      <a href="https://github.com/CrispyBaguette/wasm-palette-converter">
        <FontAwesomeIcon
          icon={faGithub}
          className="fa-2x hover:text-nord-7 mx-2"
        />
      </a>
      <a href="https://blog.bruyant.xyz">
        <FontAwesomeIcon
          icon={faIgloo}
          className="fa-2x hover:text-nord-7 mx-2"
        />
      </a>
      <span className="text-sm">
        Powered by{" "}
        <a
          href="https://ipfs.io"
          target="_blank"
          rel="noreferrer"
          className="bg-nord-5 text-nord-1 hover:bg-nord-7 px-1 "
        >
          IPFS
        </a>
        . Visit using your own node !
      </span>
    </header>
  );
}
export default Header;
