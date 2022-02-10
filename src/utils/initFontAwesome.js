import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faPowerOff, faUser, faPiggyBank, faCopyright } from "@fortawesome/free-solid-svg-icons";
function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faPiggyBank);
  library.add(faCopyright);
}

export default initFontAwesome;
