"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var Drawer_1 = require("@mui/material/Drawer");
// import DrawerList from "./DrawerList";
// import {useGlobalContext} from "../../../context";
// type Anchor = "top" | "left" | "bottom" | "right";
function TemporaryDrawer(_a) {
    // const { isOpen, setOpen} = useGlobalContext();
    // const [isOpen, setOpen] = React.useState(false);
    var children = _a.children, isOpen = _a.isOpen, setOpen = _a.setOpen;
    var _b = React.useState({
        // top: false,
        // left: false,
        right: false
    }), state = _b[0], setState = _b[1];
    var toggleDrawer = function (anchor, open) {
        return function (event) {
            var _a;
            if (event.type === "keydown" &&
                ((event).key === "Tab" ||
                    (event).key === "Shift")) {
                return;
            }
            setState(__assign(__assign({}, state), (_a = {}, _a[anchor] = open, _a)));
        };
    };
    var list = function (anchor) { return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "auto" }, 
        // role="presentation"
        onClick: function () { return setOpen(false); }, onKeyDown: function () { return setOpen(false); } }, { children: children }))); };
    return ((0, jsx_runtime_1.jsx)("div", { children: (["right"]).map(function (anchor) { return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsx)(Drawer_1["default"]
            // @ts-ignore
            , __assign({ 
                // @ts-ignore
                anchor: anchor, open: isOpen, onClose: function () { return setOpen(false); } }, { children: list(anchor) })) }, anchor)); }) }));
}
exports["default"] = TemporaryDrawer;
