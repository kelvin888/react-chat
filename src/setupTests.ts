// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { PayloadAction } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
jest.mock("redux-state-sync", () => ({
  createStateSyncMiddleware:
    () =>
    () =>
    (next: (action: PayloadAction) => void) =>
    (action: PayloadAction) =>
      next(action),
  initMessageListener: () => jest.fn(),
}));

jest.requireActual("react-router-dom");
