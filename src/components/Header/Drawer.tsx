import * as React from "react";
import Drawer from "@mui/material/Drawer";

// import DrawerList from "./DrawerList";
// import {useGlobalContext} from "../../../context";

// type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer({children, isOpen, setOpen}) {
  // const { isOpen, setOpen} = useGlobalContext();
  // const [isOpen, setOpen] = React.useState(false);
  
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    right: false,
    // bottm: false,
  });

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === "keydown" &&
        ((event).key === "Tab" ||
          (event).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <div
      style={{ width: "auto" }}
      // role="presentation"
      onClick={()=>setOpen(false)}
      onKeyDown={()=>setOpen(false)}
    >
      {/* <DrawerList /> */}
      {
        children
      }
    </div>
  );

  return (
    <div>
      {(["right"]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
          // @ts-ignore
            anchor={anchor}
            open={isOpen}
            onClose={()=>setOpen(false)}
          >
            {/* @ts-ignore */}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}