// Type definitions for redux-burger-menu
// Project: redux-burger-menu
// Definitions by: jonasgrunert github.com/jonasgrunert

import * as React from "react";
import { ReactBurgerMenu } from "react-burger-menu";

export interface IActionReduxBurgerMenu {
  type: string;
  payload: boolean;
}

export interface IStateReduxBurgerMenu {
  isOpen: boolean;
}

export function action(isOpen: boolean, menId?: string): IActionReduxBurgerMenu;
export function decorator(ComposedComponent: ReactBurgerMenu, menuId?: string): React.Component;
export function reducer(state: IStateReduxBurgerMenu, action: IActionReduxBurgerMenu): IStateReduxBurgerMenu;
