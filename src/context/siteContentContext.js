import { createContext } from "react";

// { sections: { [key]: object }, loading: boolean }
export const SiteContentContext = createContext({ sections: {}, loading: false });
